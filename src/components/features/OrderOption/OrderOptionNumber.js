import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({currentValue}) => (
  <div>
    OrderOptionNumber: {currentValue}
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.node.isRequired,
};

export default OrderOptionNumber;
