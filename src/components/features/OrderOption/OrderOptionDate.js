import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const OrderOptionDate = ({ currentValue, setOptionValue }) => {

  return (
    <div className={styles.component}>
      <DatePicker
        selected={currentValue}
        dateFormat='dd/MM/yyyy'
        onChange={date => setOptionValue(date)}
      />
    </div>
  );
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;