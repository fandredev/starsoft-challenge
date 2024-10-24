'use client';
import Image from 'next/image';
import React from 'react';
import StartSoftLogo from '../StartSoftLogo';

import styles from './Header.module.scss';
import { useSelector } from 'react-redux';
import { getTotalCartQuantity } from '@/app/store/cartSlice';
import { useRouter } from 'next/navigation';

export default function HeaderHomePage() {
  const totalCardQuantity = useSelector(getTotalCartQuantity);
  const router = useRouter();

  function handleNavigateToCartOverview() {
    router.push('/checkout');
  }

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
          onClick={handleNavigateToCartOverview}
        />
        {totalCardQuantity}
      </div>
    </header>
  );
}
