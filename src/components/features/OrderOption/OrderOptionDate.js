import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
// import 'react-datepicker/dist/react-datepicker.css';
// import '../../../../node_modules/react-datepicker/src/stylesheets/datepicker.scss';

const OrderOptionDate = ({ setOptionValue }) => {
  let [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.component}>
      <DatePicker
        className={styles.input}
        selected={startDate}
        dateFormat='yyyy/MM/dd'
        onChange={date => {
          setStartDate(date);
          setOptionValue(date.toISOString().slice(0, 10));
        }}
        isClearable={true} />
    </div>
  );
};

OrderOptionDate.propTypes = {
  date: PropTypes.number,
  currentValue: PropTypes.any,
  // currentValue: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;