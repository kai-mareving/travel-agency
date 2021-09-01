import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOption = ({ name, type, id, ...option }) => {
  // console.log('...options:', {...option});
  console.log({ id }, { type });
  return (
    <div className={styles.component}>
      <h3 className={styles.title}>
        {name}
      </h3>
      <p>{option.defaultValue ? 'Default: ' + option.defaultValue : null}</p>
    </div>
  );
};

OrderOption.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string,
};

export default OrderOption;