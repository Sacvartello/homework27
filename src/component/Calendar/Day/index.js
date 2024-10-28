import React, {Component} from 'react';
import Context from '../../../context/Context';
import classNames from 'classnames';
import './Day.css';

class Day extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { day, isSelected } = this.props;
        return (
            <Context.Consumer>
                {({ selectedDate, setSelectedDate }) => (
                    <div
                        className={classNames('day', { 'day-selected': isSelected })}
                        onClick={() => setSelectedDate(day)}
                    >
                        {day.getDate()}
                    </div>
                )}
            </Context.Consumer>
        );
    }
}

export default Day;
