import Comparison from 'components/Comparison';
import styles from 'styles/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.title}>
      <h1>Which Pokemon is rounder?</h1>
      <Comparison />
    </div>
  );
};

export default Home;
