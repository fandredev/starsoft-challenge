import { getCart } from '@/app/store/cartSlice';
import Image from 'next/image';
import React from 'react';
// import { useSelector } from 'react-redux';

import styles from './ProductItemDetail.module.scss';
import UpdateProductQuantity from '../Button/IncreaseProduct';
import Product from '@/app/interfaces/Product';
import { useSelector } from 'react-redux';

export default function ProductItemDetail() {
  const cart = useSelector(getCart);

  const firstCart: Product[] = [
    {
      id: 1,
      name: 'Backpack',
      description:
        'Uma mochila resistente com compartimentos secretos, ideal para aventureiros que precisam carregar uma variedade de itens essenciais em suas jornadas épicas.',
      image: 'https://softstar.s3.amazonaws.com/items/backpack.png',
      price: 182,
      createdAt: '2024-07-18T23:55:43.238Z',
    },
  ];

  return (
    <>
      {cart.map((product) => (
        <>
          <div
            key={product.id}
            className={styles['container-product-detail-item']}
          >
            <aside className={styles['container-left-product-detail-item']}>
              <Image
                src={product.image}
                alt={product.description}
                width={180}
                loading="lazy"
                height={180}
              />
            </aside>
            <aside className={styles['container-right-product-detail-item']}>
              <span>{product.name}</span>
              <p>{product.description}</p>

              <div>
                <Image
                  src="/images/icons/etherium.svg"
                  alt="Ícone da moeda Etherium"
                  width={29}
                  height={29}
                />
                <span>
                  {product.totalPrice}
                  <abbr title="Ethereum"> ETH</abbr>
                </span>
              </div>
              <UpdateProductQuantity product={product} />
            </aside>
          </div>
        </>
      ))}
    </>
  );
}
