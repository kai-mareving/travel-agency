import React from 'react';
import PropTypes from 'prop-types';
// import styles from './OrderForm.scss';
import { Row, Col } from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = ({ tripCost, options, setOrderOption }) => {
  //// console.log('options:', { options });

  return (
    <Row>
      {pricing.map(({...option}) => (
        <Col md={4} key={option.id}>
          <OrderOption setOrderOption={setOrderOption} currentValue={options[option.id]} {...option} />
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
  setOrderOption: PropTypes.func,
};

export default OrderForm;