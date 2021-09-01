import React from 'react';
import PropTypes from 'prop-types';
// import styles from './OrderForm.scss';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Row, Col } from 'react-flexbox-grid';

const OrderForm = ({ tripCost, options }) => {
  //todo what is the difference in output?
  //todo why {...option} in pricing.map instead of {...options} or {options}?
  //// console.log('options:', { ...options });
  //// console.log('options:', { options });

  return (
    <Row>
      {pricing.map(({...option}) => (
        <Col md={4} key={option.id}>
          <OrderOption {...option} />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options} />
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;