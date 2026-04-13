import React from 'react';
import styles from './Card.module.css';

export const Card = ({ children, className = '', hoverable = false, glass = false }) => {
  const classes = [
    styles.card,
    hoverable ? styles.hoverable : '',
    glass ? styles.glass : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`${styles.header} ${className}`.trim()}>{children}</div>
);

export const CardBody = ({ children, className = '' }) => (
  <div className={`${styles.body} ${className}`.trim()}>{children}</div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`${styles.footer} ${className}`.trim()}>{children}</div>
);
