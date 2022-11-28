import Button from 'components/Button';
import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';

interface ComparisonItemProps {
  content: any;
  onClick: any;
}

const ComparisonItem = ({ content, onClick }: ComparisonItemProps) => {
  return (
    <div className={styles.container}>
      <Image
        width="200"
        height="200"
        src={content.sprites.front_default}
        alt=""
      />
      <h2 className={styles.pokemonName}>{content.name}</h2>
      <Button onClick={onClick}>Rounder</Button>
    </div>
  );
};

export default ComparisonItem;
