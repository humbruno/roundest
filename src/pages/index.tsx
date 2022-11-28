import React from 'react';
import type { NextPage } from 'next';
import styles from 'styles/Home.module.scss';
import Head from 'next/head';
import Comparison from 'components/Comparison';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Roundest Pokemon</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Which Pokemon is rounder?</h1>
        <Comparison />
      </div>
    </>
  );
};
export default Home;
