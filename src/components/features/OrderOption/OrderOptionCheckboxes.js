import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => {

  return (
    <div className={styles.checkboxes}>

      {values.map(value => (
        <label key={value.id}>
          {value.name} ({formatPrice(value.price)})
          <input type='checkbox' name={value.id} id={value.id} onChange={e =>setOptionValue(newValueSet(currentValue, value.id, e.currentTarget.checked))}></input>
        </label>
      ))}

    </div>
  );
};

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.node, /* change later */
  setOptionValue: PropTypes.func,
  formatPrice: PropTypes.func,
};

export default OrderOptionCheckboxes;
