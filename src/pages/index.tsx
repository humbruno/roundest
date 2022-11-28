import React, { useEffect, useState } from 'react';
import styles from 'styles/Home.module.scss';
import { getOptionsForVote } from 'utils/getRandomPokemon';
import type { NextPage } from 'next';
import { trpc } from 'utils/trpc';
import ComparisonItem from 'components/ComparisonItem';

const Home: NextPage = () => {
  const [ids, updateIds] = useState(() => getOptionsForVote());

  const [firstId, secondId] = ids;

  const first = trpc['get-pokemon-by-id'].useQuery({ id: firstId }).data
    ?.pokemon;
  const second = trpc['get-pokemon-by-id'].useQuery({ id: secondId }).data
    ?.pokemon;

  if (!first || !second) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.title}>
      <h1>Which Pokemon is rounder?</h1>
      <div className={styles.container}>
        <ComparisonItem content={first} />
        <strong>or</strong>
        <ComparisonItem content={second} />
      </div>
    </div>
  );
};
export default Home;
