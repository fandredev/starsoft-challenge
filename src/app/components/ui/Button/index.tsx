import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  productAdded?: boolean;
}

export default function Button({
  children,
  onClick,
  productAdded,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${styles.button} ${
        productAdded && `${styles['button-success-add-product']}`
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
