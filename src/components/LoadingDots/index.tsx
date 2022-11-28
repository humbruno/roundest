import React from 'react';
import styles from './styles.module.scss';

const LoadingDots = () => {
  return (
    <div className={styles.bouncingLoader}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingDots;
