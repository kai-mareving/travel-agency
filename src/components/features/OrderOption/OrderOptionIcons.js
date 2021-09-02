import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionIcons = ({currentValue}) => (
  <div>
    OrderOptionIcons: {currentValue}
  </div>
);

OrderOptionIcons.propTypes = {
  currentValue: PropTypes.node.isRequired,
};

export default OrderOptionIcons;
