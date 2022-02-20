import React, { useState } from 'react';
import styled from 'styled-components';
import Result from './Result';

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 450px;
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

const Title1 = styled.div`
  font-size: 50px;
  font-family: 'STIX Two Text', serif;
  margin-right: 10px;
`;
const Title2 = styled.div`
  font-size: 30px;
  font-family: 'Georama', sans-serif;
`;
const Info = styled.div`
  font-size: 15px;
  font-family: 'Nanum Gothic', sans-serif;
  color: #454545;
  margin: 10px 0 60px 0;
  @media all and (max-width: 300px) {
    letter-spacing: -0.75px;
  }
`;
const Name = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 30px;
  font-size: 17.5px;
  font-family: 'Nanum Myeongjo', serif;
  margin: 0 15px 10px 0;
`;
const In = styled.input`
  width: 120px;
  height: 30px;
  outline: none;
  border: 0px;
  border-bottom: 2px solid #4b4b4b;
  background-color: transparent;
  font-size: 20px;
  text-align: center;
  font-family: 'Crimson Pro', serif;
  font-style: italic;
  margin-bottom: 10px;
  &::placeholder {
    color: #b3b3b3;
    font-style: italic;
  }
`;
const Button = styled.div`
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 27px;
  font-family: 'Montserrat', sans-serif;
  margin-top: 50px;
  cursor: pointer;
  box-shadow: 2px 2px 5px;
  transition: 0.2s all linear;
  &:hover {
    font-weight: 600;
    box-shadow: 4px 4px 5px;
  }
`;
const Footer = styled.div`
  font-size: 14px;
  font-family: 'Nanum Gothic', sans-serif;
  color: gray;
  width: 250px;
  text-align: center;
  line-height: 16px;
  margin-top: 20px;
`;

const Home = () => {
  const [input, setInput] = useState({ ETS: '', maxLeave: '' });
  const [state, setState] = useState({
    year: 2022,
    month: 1,
    date: 19,
    leave: 39,
  });
  const [page, setPage] = useState(false);

  const onChange = (e) => {
    var chkStyle = /^[0-9]*$/;
    if (!chkStyle.test(e.target.value) && e.target.value !== '') return;
    if ((e.target.name === 'ETS' ? 8 : 2) < e.target.value.length) return;
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const onCalculate = () => {
    var ETS, year, month, date, leave;
    var maxdate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (input.ETS === '') {
      ETS = 20220119;
      year = 2022;
      month = 1;
      date = 19;
    } else {
      ETS = parseInt(input.ETS);
      year = parseInt(parseInt(input.ETS) / 10000);
      month = parseInt((parseInt(input.ETS) / 100) % 100);
      date = parseInt(input.ETS) % 100;
    }
    if (input.maxLeave === '') {
      leave = 39;
    } else {
      leave = parseInt(input.maxLeave);
    }
    if (
      ETS < 20210601 ||
      ETS > 20220918 ||
      month < 1 ||
      month > 12 ||
      date < 1 ||
      date > maxdate[month - 1]
    ) {
      alert('전역일을 확인해 주세요.\n20210601 ~ 20220918 만 가능합니다.');
    } else if (leave > 60) {
      alert('남은 휴가 수가 60 이하여야 계산 가능합니다.');
    } else {
      setState({ year, month, date, leave });
      setPage(true);
    }
  };

  return page ? (
    <Result
      year={state.year}
      month={state.month}
      date={state.date}
      leave={state.leave}
      onBack={() => {
        setPage(false);
      }}
    />
  ) : (
    <Wrapper>
      <FlexRow>
        <Title1>ETS</Title1>
        <Title2>Calculator</Title2>
      </FlexRow>
      <Info>클리어링, 조기전역일을 알 수 있습니다.</Info>
      <FlexRow>
        <Name>전역일</Name>
        <In
          name="ETS"
          placeholder="20220119"
          value={input.ETS}
          onChange={onChange}
        ></In>
      </FlexRow>
      <FlexRow>
        <Name>남은 휴가 수</Name>
        <In
          name="maxLeave"
          placeholder="39"
          value={input.maxLeave}
          onChange={onChange}
        ></In>
      </FlexRow>
      <Button onClick={onCalculate}>Calculate!</Button>
      <Footer>
        오류 제보 및 건의사항은 seuha516@naver.com으로 보내주세요.
      </Footer>
    </Wrapper>
  );
};

export default Home;
