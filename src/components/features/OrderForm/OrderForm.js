import React from 'react';
import PropTypes from 'prop-types';
// import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Row, Col } from 'react-flexbox-grid';

const OrderForm = ({cost}) => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={cost}/>
    </Col>
  </Row>
);


OrderForm.propTypes = {
  cost: PropTypes.string,
};

export default OrderForm;