import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';

interface ComparisonItemProps {
  content: any;
}

const ComparisonItem = ({ content }: ComparisonItemProps) => {
  return (
    <div className={styles.placeholder}>
      <img
        className={styles.image}
        src={content.sprites.front_default}
        alt=""
      />
      <h2>{content.name}</h2>
    </div>
  );
};

export default ComparisonItem;
