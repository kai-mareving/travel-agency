import React from 'react';
import PropTypes from 'prop-types';
// import styles from './OrderForm.scss';
import { Row, Col } from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import OrderSummary from '../OrderSummary/OrderSummary';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings.js';

const sendOrder = (options, tripCost, tripId, tripName, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  const url = settings.db.url + '/' + settings.db.endpoint.orders; //or '/1';
  const payload = {
    tripId,
    tripName,
    countryCode,
    ...options,
    totalCost,
  };
  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST', //or 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  if (options.name === '' || options.contact === '') {
    alert('Missing name and phone number. Please enter your contact data before submiting.');
    return;
  }
  else if (options.name !== '' && options.contact !== '') {
    fetch(url, fetchOptions)
      .then(function (response) {
        return response.json();
      }).then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
      });
  }
};

const OrderForm = ({ tripCost, tripId, tripName, countryCode, options, setOrderOption }) => {
  return (
    <Row>
      {pricing.map(({...option}) => (
        <Col md={4} key={option.id}>
          <OrderOption setOrderOption={setOrderOption} currentValue={options[option.id]} {...option} />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options} />
        <Button onClick={() => sendOrder(options, tripCost, tripId, tripName, countryCode)}>Order Now!</Button>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  countryCode: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
