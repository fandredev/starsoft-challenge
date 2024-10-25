import { deleteItem, getCart, getTotalCartPrice } from '@/app/store/cartSlice';
import Image from 'next/image';
import React, { useState } from 'react';

import styles from './ProductItemDetail.module.scss';
import UpdateProductQuantity from '../Button/IncreaseProduct';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Button from '../Button';
import EmptyProduct from '../EmptyProduct';

export default function ProductItemDetail() {
  const [finishCartText, setFinishCartText] = useState('FINALIZAR COMPRA');
  const [finishCart, setFinishCart] = useState(false);

  const cart = useSelector(getCart);
  const totalPrice = useSelector(getTotalCartPrice);

  const dispatch = useDispatch();

  function handleFinishCart() {
    setFinishCartText('COMPRA FINALIZADA!');
    setFinishCart(true);
  }

  return (
    <main className={styles['container-product-item']}>
      {cart.length > 0 ? (
        <>
          <h1>
            {!finishCart
              ? 'Conclua sua compra'
              : 'Compra concluída com sucesso'}
          </h1>
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

                  <div
                    className={styles['container-right-product-detail-value']}
                  >
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

                  {!finishCart && (
                    <div
                      className={
                        styles['container-right-product-detail-actions']
                      }
                    >
                      <UpdateProductQuantity product={product} />
                      <button
                        onClick={() => {
                          dispatch(deleteItem(product.id));
                        }}
                      >
                        <Image
                          src="/images/icons/delete.svg"
                          alt="Ícone de uma lixeira para representar deletar um produto"
                          width={24}
                          height={24}
                        />
                      </button>
                    </div>
                  )}
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
            <Button productAdded onClick={handleFinishCart}>
              {finishCartText}
            </Button>
          </div>
        </>
      ) : (
        <EmptyProduct />
      )}
    </main>
  );
}
