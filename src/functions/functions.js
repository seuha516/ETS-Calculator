const maxdate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const moon = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

export const holiday = ({ year, month, date }) => {
  var yearString = `${year % 100}`;
  var monthString = month < 10 ? `0${month}` : `${month}`;
  var dateString = date < 10 ? `0${date}` : `${date}`;
  var string = `${yearString}${monthString}${dateString}`;

  if (string === '210101') return `NEW YEAR'S DAY (US/ROK)`;
  else if (string === '210115') return `DR. MLK DAY (US) TRAINING HOLIDAY`;
  else if (string === '210118') return `DR. MARTIN LUTHER KING DAY (US)`;
  else if (string === '210208')
    return `TRAINING HOLIDAY - SUPERBOWL LIII(53rd) (US)`;
  else if (string === '210211') return `LUNAR NEW YEAR (ROK)`;
  else if (string === '210212') return `LUNAR NEW YEAR (US/ROK)`;
  else if (string === '210213') return `LUNAR NEW YEAR (ROK)`;
  else if (string === '210215') return `PRESIDENT'S DAY (US)`;
  else if (string === '210222')
    return `PRESIDENT'S DAY (US) TRAINING HOLIDAY OBV`;
  else if (string === '210329') return `TRAINING HOLIDAY`;
  else if (string === '210330') return `TRAINING HOLIDAY`;
  else if (string === '210519') return `BUDDHA'S BIRTHDAY (ROK)`;
  else if (string === '210528') return `TRAINING HOLIDAY (US) - MEMORIAL DAY`;
  else if (string === '210531') return `MEMORIAL DAY (US)`;
  else if (string === '210702')
    return `TRAINING HOLIDAY (US) - INDEPENDENCE DAY`;
  else if (string === '210704') return `INDEPENDENCE DAY (US)`;
  else if (string === '210705') return `INDEPENDENCE DAY (US) OBSERVED`;
  else if (string === '210830') return `TRAINING HOLIDAY (EXERCISE)`;
  else if (string === '210831') return `TRAINING HOLIDAY (EXERCISE)`;
  else if (string === '210906') return `LABOR DAY (US)`;
  else if (string === '210907') return `TRAINING HOLIDAY (US) - LABOR DAY`;
  else if (string === '210920') return `CHUSEOK (ROK)/US MIL TRAINING HOLIDAY`;
  else if (string === '210921') return `CHUSEOK (US/ROK)`;
  else if (string === '210922') return `CHUSEOK (ROK)`;
  else if (string === '211008') return `COLUMBUS DAY (US) TRAINING HOLIDAY`;
  else if (string === '211011') return `COLUMBUS DAY (US)`;
  else if (string === '211111') return `VETERAN'S DAY (US) OBSERVED`;
  else if (string === '211112') return `TRAINING HOLIDAY (US) - VETERAN'S DAY`;
  else if (string === '211125') return `THANKSGIVING DAY (US)`;
  else if (string === '211126') return `TRAINING HOLIDAY (US) - THANKSGIVING`;
  else if (string === '211224') return `CHRISTMAS (US) HOLIDAY (IN LIEU)`;
  else if (string === '211225') return `CHRISTMAS DAY (US/ROK)`;
  else if (string === '211227') return `CHRISTMAS DAY (US) TRAINING HOLIDAY`;
  else if (string === '211230') return `NEW YEARS DAY (US) TRAINING HOLIDAY`;
  else if (string === '211231') return `NEW YEARS DAY (US) IN LIEU`;
  else if (string === '220101') return `NEW YEAR'S DAY (US/ROK)`;
  else if (string === '220114') return `DR. MLK DAY (US) TRAINING HOLIDAY`;
  else if (string === '220117') return `DR. MARTIN LUTHER KING DAY (US)`;
  else if (string === '220131') return `LUNAR NEW YEAR (US/ROK)`;
  else if (string === '220201') return `LUNAR NEW YEAR (ROK)`;
  else if (string === '220202') return `LUNAR NEW YEAR (ROK)`;
  else if (string === '220207')
    return `TRAINING HOLIDAY - SUPERBOWL LVI(56th) (US)`;
  else if (string === '220218') return `PRESIDENT'S DAY (US) TRAINING HOLIDAY`;
  else if (string === '220221') return `PRESIDENT'S DAY (US)`;
  else if (string === '220328') return `TRAINING HOLIDAY`;
  else if (string === '220329') return `TRAINING HOLIDAY`;
  else if (string === '220508') return `BUDDHA'S BIRTHDAY (ROK)`;
  else if (string === '220527') return `TRAINING HOLIDAY (US) - MEMORIAL DAY`;
  else if (string === '220530') return `MEMORIAL DAY (US)`;
  else if (string === '220701')
    return `TRAINING HOLIDAY (US) - INDEPENDENCE DAY`;
  else if (string === '220704') return `INDEPENDENCE DAY (US)`;
  else if (string === '220905') return `LABOR DAY (US)`;
  else if (string === '220906') return `TRAINING HOLIDAY (US) - LABOR DAY`;
  else if (string === '220909') return `CHUSEOK (US/ROK)`;
  else if (string === '220910') return `CHUSEOK (ROK)`;
  else if (string === '220911') return `CHUSEOK (ROK)`;
  else if (string === '220912') return `ALTERNATE CHUSEOK (ROK)`;
  else if (string === '220916') return `TRAINING HOLIDAY`;
  else if (string === '220919') return `TRAINING HOLIDAY`;
  else return `X`;
};

export const dateToOrder = ({ year, month, date }) => {
  var ret = date;
  if (year === 2022) ret += 365;
  for (var i = 1; i < month; i++) ret += maxdate[i - 1];
  return ret;
};
export const orderToDate = (order) => {
  var year, month, date;
  if (order > 365) {
    order -= 365;
    year = 2022;
  } else year = 2021;
  for (var i = 1; i < 13; i++) {
    if (order <= maxdate[i - 1]) {
      month = i;
      date = order;
      break;
    } else {
      order -= maxdate[i - 1];
    }
  }
  return { year, month, date };
};
export const dateToWeek = ({ year, month, date }) => {
  var order = dateToOrder({ year, month, date });
  return { week: parseInt((order + 4) / 7), number: ((order + 4) % 7) + 1 };
};

export const makeString = ({ year, month, date }) => {
  var monthString = month < 10 ? `0${month}` : `${month}`;
  var dateString = date < 10 ? `0${date}` : `${date}`;
  return `${year}.${monthString}.${dateString}`;
};
export const ETS = ({ year, month, date }) => {
  return { year, month, date };
};
export const fastETS = ({ year, month, date, leave }) => {
  return orderToDate(
    dateToOrder({ year, month, date }) -
      leave +
      (leave !== 0 && leave !== '' && leave !== '0' ? 1 : 0),
  );
};
export const clearing = ({ year, month, date, leave }) => {
  var fastETSOrder =
    dateToOrder({ year, month, date }) -
    leave +
    (leave !== 0 && leave !== '' && leave !== '0' ? 1 : 0);
  var workingDay = 7;
  for (let i = fastETSOrder - 1; workingDay >= 0; i--) {
    if (
      holiday(orderToDate(i)) === 'X' &&
      dateToWeek(orderToDate(i)).number !== 1 &&
      dateToWeek(orderToDate(i)).number !== 7
    ) {
      workingDay--;
      if (workingDay === 0) return orderToDate(i);
    }
  }
};

export const calendar = ({ year, month, date, leave }) => {
  var clStart = dateToOrder(clearing({ year, month, date, leave }));
  var clEnd = dateToOrder(fastETS({ year, month, date, leave })) - 1;
  var ETS = dateToOrder({ year, month, date });
  var start = clStart;
  var end = dateToOrder({ year, month, date });
  while (dateToWeek(orderToDate(start)).number !== 1) start--;
  while (dateToWeek(orderToDate(end)).number !== 7) end++;
  start -= 7;
  end += 7;

  var ret = [];
  for (let i = start; i <= end; i += 7) {
    var week = [];
    for (let j = i; j < i + 7; j++) {
      var now = '';
      var type = '';
      var info = '';

      if (j === start || orderToDate(j).date === 1)
        now = moon[orderToDate(j).month - 1] + ' ' + orderToDate(j).date;
      else now = orderToDate(j).date;

      if (clStart <= j && j <= clEnd) {
        var jToDate = orderToDate(j);
        if (
          dateToWeek(jToDate).number === 1 ||
          dateToWeek(jToDate).number === 7 ||
          holiday(jToDate) !== 'X'
        ) {
          type = 'X';
        } else type = 'CL';
      } else if (j > clEnd + 1 && j < ETS) {
        type = 'LV';
      } else if (j === clEnd + 1) {
        type = 'LV(END)';
      } else if (j === ETS) {
        type = 'LV(ETS)';
      }
      if ((leave === 0 || leave === '0' || leave === '') && j === ETS)
        type = 'ETS';
      if ((leave === 1 || leave === '1') && j === ETS) type = 'LV(ETS)';

      if (holiday(orderToDate(j)) !== 'X') info = holiday(orderToDate(j));

      week.push({
        date: now,
        detail: makeString(orderToDate(j)),
        type: type,
        info: info,
      });
    }
    ret.push(week);
  }

  return ret;
};
