import React from 'react';
import styles from './Button.module.css';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseClassName = `${styles.btn} ${styles[variant]} ${className}`;
  
  return (
    <button className={baseClassName.trim()} {...props}>
      {children}
    </button>
  );
};
