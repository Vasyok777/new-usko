import React from 'react';
import Header from 'components/Header';
import Promo from './Promo';
import Worldwide from './Worldwide';
import styles from './Home.module.scss';
import Experience from './Experience';

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Promo />
        <Worldwide />
        <Experience />
      </div>
    </>
  );
};

export default Home;
