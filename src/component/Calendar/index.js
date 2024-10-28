import React from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, format } from 'date-fns';
import Context from '../../context/Context';
import Day from './Day';
import './Calendar.css';

class Calendar extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {({ selectedDate }) => {
          const daysInMonth = eachDayOfInterval({
            start: startOfMonth(selectedDate),
            end: endOfMonth(selectedDate),
          });

          return (
            <div className="calendar">
              <h3>{format(selectedDate, 'MMMM yyyy').toUpperCase()}</h3>
              <div className="calendar-days-header">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                  <div key={day}>{day}</div>
                ))}
              </div>
              <div className="calendar-days">
                {daysInMonth.map((day) => (
                  <Day key={day} day={day} isSelected={isSameDay(day, selectedDate)} />
                ))}
              </div>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default Calendar;