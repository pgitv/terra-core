import React from 'react';
import moment from 'moment';
import DatePicker from '../../../../lib/DatePicker';

class DatePickerOnChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: '' };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(event, date) {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <h3>
Selected Date123:
          <span id="selected-date">{this.state.date}</span>
          <br></br>
          <span id="selected-date-utc">{moment().format()}</span>
          <br></br>
          <span id="selected-date-utcOffset">{moment().utcOffset()}</span>
          <br></br>
          <span id="selected-date-js">{Date('06/01/2017')}</span>
        </h3>
        <DatePicker
          name="date-input-onchange"
          onChange={this.handleDateChange}
        />
      </div>
    );
  }
}

export default DatePickerOnChange;
