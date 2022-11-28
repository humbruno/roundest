import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';

interface ComparisonItemProps {
  content: any;
  onClick: any;
}

const ComparisonItem = ({ content, onClick }: ComparisonItemProps) => {
  return (
    <div className={styles.placeholder}>
      <Image
        width="200"
        height="200"
        src={content.sprites.front_default}
        alt=""
      />
      <h2 className={styles.pokemonName}>{content.name}</h2>
      <button onClick={onClick}>Rounder</button>
    </div>
  );
};

export default ComparisonItem;
