import Image from 'next/image';
import React from 'react';
import Button from '../Button';

import styles from './CardProduct.module.scss';
import Product from '@/app/interfaces/Product';
import { useDispatch } from 'react-redux';
import { addItem } from '@/app/store/cartSlice';

interface CardProductProps {
  product: Product;
}

export default function CardProduct({ product }: CardProductProps) {
  const dispatch = useDispatch();

  function handleAddCartItem() {
    const newProduct: Product = {
      name: product.name,
      createdAt: product.createdAt,
      description: product.description,
      id: product.id,
      image: product.image,
      price: product.price,
    };

    dispatch(addItem(newProduct));
  }

  return (
    <div className={styles.cardWrapper}>
      <figure className={styles.productImage}>
        <Image
          src={product.image}
          alt={product.description}
          width={258}
          loading="lazy"
          height={258}
        />
      </figure>

      <div className={styles.containerProductInformations}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles['card-text']}>{product.description}</p>

        <div className={styles['product-price']}>
          <Image
            src="/images/icons/etherium.svg"
            alt="Ícone da moeda Etherium"
            width={29}
            height={29}
          />
          <span>
            {product.price} <abbr title="Ethereum">ETH</abbr>
          </span>
        </div>

        <Button onClick={handleAddCartItem}>Comprar</Button>
      </div>
    </div>
  );
}
