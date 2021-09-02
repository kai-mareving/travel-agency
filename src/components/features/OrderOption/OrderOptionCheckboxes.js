import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionCheckboxes = ({currentValue}) => (
  <div>
    OrderOptionCheckboxes: {currentValue}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  currentValue: PropTypes.node.isRequired,
};

export default OrderOptionCheckboxes;
