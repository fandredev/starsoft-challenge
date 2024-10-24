'use client';

import Image from 'next/image';
import React from 'react';

import styles from './Checkout.module.scss';
import ProductItemDetail from '../components/ui/ProductItemDetail';

import { useRouter } from 'next/navigation';

function Checkout() {
  const router = useRouter();

  function handleNavigatePreviousPage() {
    router.back();
  }

  return (
    <>
      <header className={styles.header}>
        <button
          className={styles['button-back-page']}
          onClick={handleNavigatePreviousPage}
        >
          <Image
            alt="Um ícone laranja com uma seta para a esquerda indicando para voltar a página anterior"
            src="/images/icons/arrow_left.svg"
            width={33}
            height={33}
          />
        </button>
        <span>Mochila de compras</span>
      </header>
      <div className={styles['container-checkout']}>
        <ProductItemDetail />
      </div>
    </>
  );
}

export default Checkout;
