import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({currentValue, setOptionValue, type, name, id}) => {

  return (
    <div className={styles.component}>
      <input
        type={type}
        className={styles.input}
        id={id}
        value={currentValue}
        placeholder={name}
        onChange={e => setOptionValue(e.currentTarget.value)}
      />
    </div>
  );
};

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default OrderOptionText;