import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';

const OrderOption = ({ name, type, id, setOrderOption, ...otherProps }) => {
  // console.log('...options:', { ...options });
  const OptionComponent = optionTypes[type];
  if (!OptionComponent) {
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent setOptionValue={ value => setOrderOption({[id]: value}) } {...otherProps} />
      </div>
    );
  }
};

OrderOption.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setOrderOption: PropTypes.func,
};

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};

export default OrderOption;