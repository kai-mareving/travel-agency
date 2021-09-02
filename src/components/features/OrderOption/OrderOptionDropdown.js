import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionDropdown = ({currentValue}) => (
  <div>
    OrderOptionDropdown: {currentValue}
  </div>
);

OrderOptionDropdown.propTypes = {
  currentValue: PropTypes.string,
};

export default OrderOptionDropdown;
