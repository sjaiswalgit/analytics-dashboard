import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, description, counter, growth=0 }) => {
  // Fix the typo in the prop name (describtion -> description)
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.flexRow}>
        <div className={styles.cardValue}>{counter}</div>
        <div className={
          growth >= 0 ? `${styles.trend} ${styles.trendUp}` : `${styles.trend} ${styles.trendDown}`
        }>
          {growth >= 0 ? `+${growth}% ↑` : `${growth}% ↓`}
        </div>
      </div>
      <p className={styles.cardSubtitle}>{description}</p>
    </div>
  );
};

export default Card;