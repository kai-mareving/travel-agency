import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
// import DatePicker from 'react-datepicker';
// import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionDate = ({ currentValue }) => {
  return (
    <div className={styles.component}>
      OrderOptionDate: {currentValue}
      {/* <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} /> */}
    </div>
  );
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.node,
};

export default OrderOptionDate;