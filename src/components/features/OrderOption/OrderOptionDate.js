import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({ setOptionValue }) => {
  let [startDate, setStartDate] = useState(new Date());
  //// console.log('currentValue:', currentValue);
  //// console.log('startDate:', startDate);
  return (
    <div className={styles.component}>
      <DatePicker
        className={styles.input}
        selected={startDate}
        dateFormat='yyyy/MM/dd'
        onChange={date => {
          setStartDate(date);
          setOptionValue(date);
        }}
        isClearable={true} />
    </div>
  );
};

OrderOptionDate.propTypes = {
  date: PropTypes.number,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
