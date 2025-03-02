import React from 'react';
import styles from './HeadLine.module.css';

function Headline() {
  return (
    <section className={styles.home_banner}>
      <div className={styles.overlay}></div>
      <div className={styles.cta_container}>
      </div>
    </section>
  );
}

export default Headline;
