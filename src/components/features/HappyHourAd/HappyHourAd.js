import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

const HappyHourAd = ({ title, promoDescription }) => {
  return (
    <div className={styles.component}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.countdown}>{promoDescription}</div>
    </div>
  );
};

HappyHourAd.propTypes = {
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};

export default HappyHourAd;
