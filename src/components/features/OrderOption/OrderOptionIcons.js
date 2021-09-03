import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({ values, required, currentValue, setOptionValue }) => {
  // console.log('OrderOptionIcons: ', currentValue);
  return (
    <div className={styles.component}>
      {required ? '' : ( //* if false then render empty choice field
        <div className={styles.icon} key='null' value='' onClick={setOptionValue('')}>
          <Icon name={'times-circle'}>none</Icon>
        </div>
      )}
      {values.map(value => (
        <div
          className={styles.icon}
          key={value.id}
          value={currentValue}
          onClick={value => setOptionValue(value.id)}
        >
          <Icon name={value.icon} />{value.name} ({formatPrice(value.price)})
        </div>
      ))}
    </div>
  );
};

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  formatPrice: PropTypes.func,
};

export default OrderOptionIcons;
