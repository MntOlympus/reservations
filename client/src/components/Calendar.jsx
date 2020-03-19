import React from 'react';
import moment from 'moment';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
      today: moment()
    }
    this.weekdays = moment.weekdays();
    this.weekdaysMin = moment.weekdaysMin();
    // this.month = moment.month();
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
    console.log('empties: ', emptyDays);

    let daysInMonth = [];
    for (let day = 1; day < this.daysInMonth(); day++) {
      let className = (day === this.currentDay() ? "day current-day" : "day");
      daysInMonth.push(<td key={day} className={className}>
        <span>{day}</span>
      </td>)
    }

    console.log('days: ', daysInMonth);

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
      <div>
        <table className="calendar">
          <thead>
            <tr>
              <td colSpan="2">
                <span onClick={(e) => { this.prevMonth() }}>{lessThan}</span>
              </td>

              <td colSpan="6">
                {`${this.month()}  ${this.year()}`}
              </td>
              <td colSpan="2">
                <span onClick={(e) => { this.nextMonth() }}>{greaterThan}</span>
              </td>

            </tr>
          </thead>
          <tbody>
            <tr>
              {weekdays}
            </tr>
            {trDays}
          </tbody>
        </table>

      </div>
    )
  }
}

export default Calendar;