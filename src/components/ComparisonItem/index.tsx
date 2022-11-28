import React from 'react';
import styles from './styles.module.scss';

interface ComparisonItemProps {
  content: number;
}

const ComparisonItem = ({ content }: ComparisonItemProps) => {
  return <div className={styles.placeholder}>{content}</div>;
};

export default ComparisonItem;
