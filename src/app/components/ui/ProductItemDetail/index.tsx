import { getCart, getTotalCartPrice } from '@/app/store/cartSlice';
import Image from 'next/image';
import React from 'react';

import styles from './ProductItemDetail.module.scss';
import UpdateProductQuantity from '../Button/IncreaseProduct';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Button from '../Button';
import EmptyProduct from '../EmptyProduct';

export default function ProductItemDetail() {
  const cart = useSelector(getCart);
  const totalPrice = useSelector(getTotalCartPrice);

  return (
    <main className={styles['container-product-item']}>
      {cart.length > 0 ? (
        <>
          {cart.map((product) => (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
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
                <aside
                  className={styles['container-right-product-detail-item']}
                >
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
              </motion.div>
            </>
          ))}

          <div className={styles['container-total-price']}>
            <span>Total</span>
            <span>
              <Image
                src="/images/icons/etherium.svg"
                alt="Ícone da moeda Etherium"
                width={29}
                height={29}
              />
              {totalPrice}
              <abbr title="Ethereum">ETH</abbr>
            </span>
          </div>
          <div>
            <Button productAdded>Finalizar compra</Button>
          </div>
        </>
      ) : (
        <EmptyProduct />
      )}
    </main>
  );
}
