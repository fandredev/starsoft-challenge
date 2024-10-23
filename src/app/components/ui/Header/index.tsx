import Image from 'next/image';
import React from 'react';
import StartSoftLogo from '../StartSoftLogo';

import styles from './Header.module.scss';

export default function HeaderHomePage() {
  const quantityProducts = 0;
  return (
    <header className={styles.header}>
      <div>
        <StartSoftLogo />
      </div>
      <div className={styles['container-bag-quantity-products']}>
        <Image
          src="/images/icons/bag.svg"
          alt="Ícone de uma mochila laranja sinalizando a quantidade de produtos"
          width={33}
          height={33}
        />
        {quantityProducts}
      </div>
    </header>
  );
}
