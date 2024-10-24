import React from 'react';
import {
  getCurrentQuantityById,
  incrementQuantityItem,
} from '@/app/store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Product from '@/app/interfaces/Product';

import styles from './IncreaseProduct.module.scss';

interface UpdateProductQuantityProps {
  product: Product;
}

export default function UpdateProductQuantity({
  product,
}: UpdateProductQuantityProps) {
  const currentQuantityProduct = useSelector(
    getCurrentQuantityById(product.id)
  );

  const dispatch = useDispatch();

  function handleIncreaseItem() {
    console.log(product, 'product');

    dispatch(incrementQuantityItem(product));
  }

  function handleDecreaseItem() {}

  return (
    <aside className={styles['buttons-container']}>
      <button className={styles.button} onClick={handleDecreaseItem}>
        -
      </button>
      <span className="text-sm font-medium">{currentQuantityProduct}</span>
      <button className={styles.button} onClick={handleIncreaseItem}>
        +
      </button>
    </aside>
  );
}
