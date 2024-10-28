import React from 'react';
import Context from '../../context/Context';
import { format } from 'date-fns';
import './CurrentDay.css'

class CurrentDay extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {({ selectedDate }) => (
          <div className='current-day'>
            <p>{format(selectedDate, 'EEEE').toUpperCase()}</p>
            <h2>{format(selectedDate, 'dd')}</h2>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default CurrentDay