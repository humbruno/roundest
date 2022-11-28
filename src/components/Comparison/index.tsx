import ComparisonItem from 'components/ComparisonItem';
import React from 'react';
import styles from './styles.module.scss';

interface ComparisonProps {
  itemsToCompare: number[];
}

const Comparison = ({ itemsToCompare }: ComparisonProps) => {
  return (
    <div className={styles.container}>
      <ComparisonItem content={itemsToCompare[0]} />
      <strong>vs</strong>
      <ComparisonItem content={itemsToCompare[1]} />
    </div>
  );
};

export default Comparison;
