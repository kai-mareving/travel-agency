import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOption = ({ option }) => {
  return (
    <div className={styles.component}>
      <h3 className={styles.title}>
        {option}
      </h3>
    </div>
  );
};

OrderOption.propTypes = {
  option: PropTypes.string.isRequired,
};

export default OrderOption;