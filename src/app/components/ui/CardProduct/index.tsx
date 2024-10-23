import Image from 'next/image';
import React from 'react';
import Button from '../Button';

import styles from './CardProduct.module.scss';
import Product from '@/app/interfaces/Product';

interface CardProductProps {
  product: Product;
}

export default function CardProduct({ product }: CardProductProps) {
  return (
    <div className={styles.cardWrapper}>
      <div></div>

      <div>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles['card-text']}>{product.description}</p>

        <div className={styles['product-price']}>
          <Image
            src="/images/icons/etherium.svg"
            alt="Ícone da moeda Etherium"
            width={29}
            height={29}
          />
          <span>{product.price} ETH</span>
        </div>

        <Button>Comprar</Button>
      </div>
    </div>
  );
}
