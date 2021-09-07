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
          console.log(typeof startDate);
          setStartDate(date);
          setOptionValue(date);
        }}
        isClearable={true} />
    </div>
  );
};

OrderOptionDate.propTypes = {
  setStartDate: PropTypes.func,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
  date: PropTypes.object,
  startDate: PropTypes.object,
};

export default OrderOptionDate;
