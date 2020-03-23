import React from 'react';
import moment from 'moment';
import styles from '../styles/Calendar.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
      today: moment(),
      checkIn: 'Check-in',
      checkout: 'Checkout',
      nights: 1
    }

    this.weekdays = moment.weekdays();
    this.weekdaysMin = moment.weekdaysMin();
  }

  year() {
    return this.state.dateContext.format("Y");
  }

  month() {
    return this.state.dateContext.format("MMMM");
  }

  daysInMonth() {
    return this.state.dateContext.daysInMonth();
  }

  currentDate() {
    return this.state.dateContext.get("date");
  }

  currentDay() {
    return this.state.dateContext.format("D");
  }

  firstDayOfMonth() {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext).startOf('month').format('d');
    return firstDay;
  }

  nextMonth() {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, 'month');
    this.setState({
      dateContext: dateContext
    });
  }

  prevMonth() {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, 'month');
    this.setState({
      dateContext: dateContext
    });
  }

  onDayClick(e, day, dateContext) {
    let year = this.year();
    let month = dateContext.format('M');
    let date = `${month}/${day}/${year}`;

    let a = moment(this.state.checkIn, 'MM.DD.YYYY');

    let b = moment(date, 'MM.DD.YYYY');
    let nights = b.diff(a, 'days')


    if (this.state.checkIn === 'Check-in') {
      this.props.updateCheckIn(date);
      this.setState({
        checkIn: date,
      })
    } else if (nights > 0) {

      let nights = b.diff(a, 'days')
      this.props.updateCheckout(date, nights);
      this.setState({
        checkout: date,
        nights: nights
      })

    }
  }

  render() {

    let weekdays = this.weekdaysMin.map(day => {
      return (
        <td key={day}>{day}</td>
      )
    });

    let emptyDays = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      emptyDays.push(<td key={i * 200}>{''}</td>)
    }

    let daysInMonth = [];
    for (let day = 1; day <= this.daysInMonth(); day++) {
      let className = (day === this.currentDay() ? "day current-day" : "day");
      console.log(className)
      daysInMonth.push(<td key={day} className={styles.trDays} onClick={(e) => this.onDayClick(e, day, this.state.dateContext)}>
        <span>{day}</span>
      </td>)
    }

    const allMonthDaySlots = [...emptyDays, ...daysInMonth];
    let rows = [];
    let slots = [];

    allMonthDaySlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        slots.push(row);
      } else {
        let insertRow = slots.slice();
        rows.push(insertRow);
        slots = [];
        slots.push(row)
      }
      if (i === allMonthDaySlots.length - 1) {
        let insertRow = slots.slice();
        rows.push(insertRow)
      }
    });

    let trDays = rows.map((day, i) => {
      return (
        <tr key={i * 100}>
          {day}
        </tr>
      );
    });

    let lessThan = '<';
    let greaterThan = '>';

    return (
      <div className={styles.calendarBox}>
        <div className={styles.monthHeader}>
          <div className={styles.prevMonth} onClick={(e) => { this.prevMonth() }}>{lessThan}</div>
          <div className={styles.currentMonth}>{`${this.month()}  ${this.year()}`}</div>
          <div className={styles.nextMonth} onClick={(e) => { this.nextMonth() }}>{greaterThan}</div>
        </div>
        <table className={styles.calendarTable}>

          <tbody>
            <tr className={styles.weekdays}>
              {weekdays}
            </tr >
            {trDays}
          </tbody>
        </table>

      </div>
    )
  }
}

export default Calendar;