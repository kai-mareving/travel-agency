import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { Row, Col } from 'react-flexbox-grid';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

const OrderSummary = ({ tripCost, options }) => (
  <Row>
    <Col xs={12}>
      <h2 className={styles.component}>
        Total: <strong>{formatPrice(calculateTotal(tripCost, options))}</strong>
      </h2>
    </Col>
  </Row>
);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;