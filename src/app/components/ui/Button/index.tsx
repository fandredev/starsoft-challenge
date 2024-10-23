import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
}
