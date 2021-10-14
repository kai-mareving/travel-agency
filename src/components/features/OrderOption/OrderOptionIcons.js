import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({ values, required, currentValue, setOptionValue }) => {
  return (
    <div className={styles.component}>

      {required ? '' : ( /* if false then render empty choice field */
        <div
          className={currentValue === '' ? styles.iconActive : styles.icon}
          onClick={() => setOptionValue('')}
        >
          <Icon name={'times-circle'} />none
        </div>
      )}

      {values.map(value => (
        <div
          className={currentValue === value.id ? styles.iconActive : styles.icon}
          key={value.id}
          onClick={() => setOptionValue(value.id)}
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
