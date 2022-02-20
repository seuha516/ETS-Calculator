import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  AiOutlineRollback,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineClose,
} from 'react-icons/ai';
import * as f from 'functions/functions';

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Frame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  min-height: 100vh;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title1 = styled.div`
  font-size: 50px;
  font-family: 'STIX Two Text', serif;
  margin-right: 10px;
`;
const Title2 = styled.div`
  font-size: 30px;
  font-family: 'Georama', sans-serif;
`;
const Menu = styled(FlexRow)`
  margin: 20px 0 30px 0;
  justify-content: space-around;
`;
const Back = styled(FlexRow)`
  width: 85px;
  padding-right: 3px;
  cursor: pointer;
  color: #464646;
  &:hover {
    color: black;
    font-weight: 700;
    svg {
      animation: turn 0.5s ease-in-out;
    }
    @keyframes turn {
      from {
        transform: rotateY(0deg);
      }
      to {
        transform: rotateY(359deg);
      }
    }
  }
`;
const LeaveWrapper = styled(FlexRow)`
  width: 110px;
  padding-left: 3px;
  svg {
    color: #5a5a5a;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;
const Leave = styled.input`
  width: 35px;
  height: 22.5px;
  outline: none;
  border: 0px;
  border-bottom: 2px solid #4b4b4b;
  background-color: transparent;
  font-size: 20px;
  text-align: center;
  font-family: 'Crimson Pro', serif;
  margin-bottom: 2.5px;
`;
const Name = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 17.5px;
  font-family: 'Nanum Myeongjo', serif;
  margin: 0 7.5px 5px 0;
`;
const Answer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 15px;
  font-family: 'Nanum Myeongjo', serif;
  margin: 0 0 3.5px 0;
`;
const Answer2 = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 15px;
  font-family: 'Nanum Myeongjo', serif;
  margin: 0 0 3.5px 0;
  @media all and (max-width: 320px) {
    letter-spacing: -0.75px;
  }
  @media all and (max-width: 300px) {
    letter-spacing: -1.5px;
  }
`;
const Calendar = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 20px 0 0 0;
`;
const TopWrapper = styled.div`
  border: 0.5px solid black;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'Georama', sans-serif;
  background-color: #272727;
  ${(props) =>
    props.name === 'Sun'
      ? css`
          color: #fda7a7;
        `
      : props.name === 'Sat'
      ? css`
          color: #a7aafd;
        `
      : css`
          color: #eaeaea;
        `}
`;
const Day = styled.div`
  border: 0.5px solid black;
  height: 50px;
  width: 100%;
  ${(props) =>
    props.type === 'CL'
      ? css`
          background-color: #d3d3d3;
        `
      : props.type === 'LV'
      ? css`
          background-color: #ffdcdc;
        `
      : props.type === 'X'
      ? css`
          background-color: #d1ffd1;
        `
      : props.type === 'LV(ETS)'
      ? css`
          background-color: #ff7979;
        `
      : props.type === 'LV(END)' || props.type === 'ETS'
      ? css`
          background-color: #ffed5f;
        `
      : css`
          background-color: white;
        `}
  cursor: pointer;
  transition: 0.2s all linear;
  &:hover {
    text-shadow: 0px 0px 5px gray;
  }
`;
const Month = styled.div`
  margin: 3.5px 1px 0 2px;
  font-size: 10px;
  display: flex;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  ${(props) =>
    props.index === 0
      ? css`
          color: red;
        `
      : props.index === 6
      ? css`
          color: blue;
        `
      : css`
          color: black;
        `}
`;
const Date = styled.div`
  margin: 2px 0 0 2px;
  font-size: 15px;
  font-family: 'Noto Sans KR', sans-serif;
  ${(props) =>
    props.index === 0
      ? css`
          color: red;
        `
      : props.index === 6
      ? css`
          color: blue;
        `
      : css`
          color: black;
        `}
`;
const Type = styled.div`
  margin-top: 5px;
  text-align: center;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  ${(props) =>
    props.type.length > 3 &&
    css`
      letter-spacing: -1px;
      @media all and (max-width: 450px) {
        margin-top: 7.5px;
        font-size: 14px;
      }
      @media all and (max-width: 375px) {
        margin-top: 10px;
        font-size: 12px;
      }
      @media all and (max-width: 320px) {
        margin-top: 11.5px;
        font-size: 10px;
      }
    `}
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: opacity 0.2s linear;
  position: fixed;
  width: 250px;
  height: 150px;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  background-color: #000000e3;
  padding: 10px;
  ${(props) =>
    !props.open &&
    css`
      opacity: 0;
      z-index: -1;
    `}
`;
const DetailTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
    color: white;
    cursor: pointer;
    &:hover {
      animation: turn 0.5s ease-in-out;
      @keyframes turn {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(180deg);
        }
      }
    }
  }
`;
const DetailDate = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: white;
  font-family: 'IBM Plex Sans Thai', sans-serif;
`;
const DetailType = styled(FlexRow)`
  margin-top: 5px;
  font-size: 25px;
  color: white;
  font-family: 'IBM Plex Sans Thai', sans-serif;
  ${(props) =>
    props.type.length > 15 &&
    css`
      font-size: 20px;
    `}
`;
const DetailInfo = styled(FlexRow)`
  margin-top: 5px;
  font-size: 16px;
  color: white;
  font-family: 'IBM Plex Sans Thai', sans-serif;
`;

const fullName = (x) => {
  if (x === 'CL') return 'Clearing';
  else if (x === 'X') return 'Off';
  else if (x === 'LV') return 'Leave';
  else if (x === 'LV(END)') return 'Leave (Early Discharge)';
  else if (x === 'LV(ETS)') return 'Leave (ETS)';
  else if (x === 'ETS') return 'ETS';
  else return 'No Info';
};

const Result = ({ year, month, date, leave, onBack }) => {
  const [state, setState] = useState({ year, month, date, leave });
  const [detail, setDetail] = useState(false);
  const onChange = (e) => {
    var chkStyle = /^[0-9]*$/;
    if (!chkStyle.test(e.target.value) && e.target.value !== '') return;
    if (parseInt(e.target.value) > 60) return;
    if (2 < e.target.value.length) return;
    setState({ ...state, leave: e.target.value });
    setDetail(false);
  };
  const onPlus = () => {
    setState({
      ...state,
      leave:
        state.leave === ''
          ? 1
          : parseInt(state.leave) < 60
          ? parseInt(state.leave) + 1
          : 60,
    });
    setDetail(false);
  };
  const onMinus = () => {
    setState({
      ...state,
      leave:
        state.leave === ''
          ? 0
          : parseInt(state.leave) > 0
          ? parseInt(state.leave) - 1
          : 0,
    });
    setDetail(false);
  };

  return (
    <Frame>
      <Wrapper>
        <FlexRow>
          <Title1>ETS</Title1>
          <Title2>Calculator</Title2>
        </FlexRow>
        <Menu>
          <Back onClick={onBack}>
            <AiOutlineRollback
              style={{ width: '25px', height: '25px', marginRight: '2px' }}
            />
            <div
              style={{
                fontSize: '14px',
                fontFamily: `'Nanum Gothic', sans-serif`,
                marginTop: '2px',
              }}
            >
              돌아가기
            </div>
          </Back>
          <LeaveWrapper>
            <div
              style={{
                fontSize: '16px',
                fontFamily: `'Nanum Gothic', sans-serif`,
                fontWeight: '700',
                marginRight: '5px',
              }}
            >
              휴가:
            </div>
            <AiOutlineMinus onClick={onMinus} />
            <Leave value={state.leave} onChange={onChange} />
            <AiOutlinePlus onClick={onPlus} />
          </LeaveWrapper>
        </Menu>
        <FlexRow>
          <Name>전역일:</Name>
          <Answer>{f.makeString(f.ETS(state))}</Answer>
        </FlexRow>
        <FlexRow>
          <Name>조기전역일:</Name>
          <Answer>{f.makeString(f.fastETS(state))}</Answer>
        </FlexRow>
        <FlexRow>
          <Name>클리어링:</Name>
          <Answer2>{`${f.makeString(f.clearing(state))} ~ ${f.makeString(
            f.orderToDate(f.dateToOrder(f.fastETS(state)) - 1),
          )} (${
            f.dateToOrder(f.fastETS(state)) - f.dateToOrder(f.clearing(state))
          }일)`}</Answer2>
        </FlexRow>
        <Calendar>
          <FlexRow>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((x) => (
              <TopWrapper key={x} name={x}>
                {x}
              </TopWrapper>
            ))}
          </FlexRow>
          {f.calendar(state).map((week) => (
            <FlexRow key={week[0].detail + 'week'}>
              {week.map((day, index) => (
                <Day
                  key={day.detail}
                  type={day.type}
                  onClick={() =>
                    setDetail({
                      date: day.detail,
                      type: day.type,
                      info: day.info,
                    })
                  }
                >
                  {day.date.length > 2 ? (
                    <div style={{ display: 'flex' }}>
                      <Month index={index}>{day.date.substr(0, 3)}</Month>
                      <Date index={index}>{day.date.substr(4)}</Date>
                    </div>
                  ) : (
                    <Date index={index}>{day.date}</Date>
                  )}
                  <Type type={day.type}>{day.type}</Type>
                </Day>
              ))}
            </FlexRow>
          ))}
        </Calendar>
      </Wrapper>
      <Detail open={detail}>
        <DetailTop>
          <DetailDate>{detail.date}</DetailDate>
          <AiOutlineClose onClick={() => setDetail(false)} />
        </DetailTop>
        <DetailType type={fullName(detail.type)}>
          {fullName(detail.type)}
        </DetailType>
        <DetailInfo>{detail.info === '' ? '' : `* ${detail.info}`}</DetailInfo>
      </Detail>
    </Frame>
  );
};

export default Result;
