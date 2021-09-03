import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({ currentValue, setOptionValue, limits, price }) => {
  return (
    <div className={styles.number}>
      <input
        type='number'
        className={styles.inputSmall}
        value={currentValue}
        min={limits.min}
        max={limits.max}
        onChange={e => setOptionValue(parseInt(e.currentTarget.value))}
      >
      </input>
      ({formatPrice(price)})
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
  price: PropTypes.string,
  formatPrice: PropTypes.func,
};

export default OrderOptionNumber;
