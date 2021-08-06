import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { Row, Col } from 'react-flexbox-grid';

const OrderSummary = ({tripCost}) => (
  <Row>
    <Col xs={12}>
      <h2 className={styles.component}><strong>Total:</strong> ${tripCost}</h2>
    </Col>
  </Row>
);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
};

export default OrderSummary;