import React from 'react';
import styles from './SkeletonCard.module.css';

export const SkeletonCard = () => {
  return (
    <div className={`${styles.skeleton} ${styles.pulse}`}>
      <div className={styles.header}>
        <div className={`${styles.shape} ${styles.badgeShape}`}></div>
        <div className={`${styles.shape} ${styles.statusShape}`}></div>
      </div>
      <div className={styles.body}>
        <div className={`${styles.shape} ${styles.titleShape}`}></div>
        <div className={`${styles.shape} ${styles.metaShape}`}></div>
        <div className={`${styles.shape} ${styles.metaShape}`} style={{ width: '40%' }}></div>
      </div>
      <div className={styles.footer}>
        <div className={`${styles.shape} ${styles.buttonShape}`}></div>
      </div>
    </div>
  );
};
