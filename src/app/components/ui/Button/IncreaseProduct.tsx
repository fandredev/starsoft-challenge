import React from 'react';
import { incrementQuantityItem } from '@/app/store/cartSlice';
import { useDispatch } from 'react-redux';
import Product from '@/app/interfaces/Product';

import styles from './IncreaseProduct.module.scss';

interface UpdateProductQuantityProps {
  product: Product;
  currentQuantity: number;
}

function UpdateProductQuantity({
  product,
  currentQuantity,
}: UpdateProductQuantityProps) {
  const dispatch = useDispatch();

  function handleIncreaseItem() {
    dispatch(incrementQuantityItem(product));
  }

  function handleDecreaseItem() {}

  return (
    <aside className={styles['buttons-container']}>
      <button className={styles.button} onClick={handleDecreaseItem}>
        -
      </button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <button className={styles.button} onClick={handleIncreaseItem}>
        +
      </button>
    </aside>
  );
}

export default UpdateProductQuantity;
