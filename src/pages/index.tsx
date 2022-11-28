import React, { useEffect, useState } from 'react';
import Comparison from 'components/Comparison';
import styles from 'styles/Home.module.scss';
import { getOptionsForVote } from 'utils/getRandomPokemon';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [comparisonItems, setComparisonItems] = useState<number[]>([]);

  useEffect(() => {
    const pokemonsToCompare = getOptionsForVote();
    setComparisonItems(pokemonsToCompare);
  }, []);

  return (
    <div className={styles.title}>
      <h1>Which Pokemon is rounder?</h1>
      <Comparison itemsToCompare={comparisonItems} />
    </div>
  );
};

export default Home;
