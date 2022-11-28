import React, { useState } from 'react';
import styles from './styles.module.scss';
import { getOptionsForVote } from 'utils/getRandomPokemon';
import { trpc } from 'utils/trpc';
import ComparisonItem from 'components/ComparisonItem';
import LoadingDots from 'components/LoadingDots';

const Comparison = () => {
  const [ids, setIds] = useState(() => getOptionsForVote());

  const [firstId, secondId] = ids;

  const first = trpc['get-pokemon-by-id'].useQuery({ id: firstId }).data;
  const second = trpc['get-pokemon-by-id'].useQuery({ id: secondId }).data;

  if (!first || !second) {
    return <LoadingDots />;
  }

  const voteForRoundest = (selected: number) => {
    //TODO: fire mutation to persist changes

    setIds(getOptionsForVote());
  };

  return (
    <>
      <div className={styles.container}>
        <ComparisonItem content={first} onClick={voteForRoundest} />
        <strong>or</strong>
        <ComparisonItem content={second} onClick={voteForRoundest} />
      </div>
    </>
  );
};
export default Comparison;
