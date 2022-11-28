import React from 'react';
import styles from './styles.module.scss';

const Comparison = () => {
  return (
    <div className={styles.container}>
      <div className={styles.placeholder} />
      <strong>vs</strong>
      <div className={styles.placeholder} />
    </div>
  );
};

export default Comparison;
