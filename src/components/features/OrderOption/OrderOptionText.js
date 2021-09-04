import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
// import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionText = ({ currentValue }) => {
  return (
    <div className={styles.component}>
    OrderOptionText: {currentValue}
    </div>
  );
};

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
};

export default OrderOptionText;