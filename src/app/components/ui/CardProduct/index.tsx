import Image from 'next/image';
import Button from '../Button';

import styles from './CardProduct.module.scss';
import Product from '@/app/interfaces/Product';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '@/app/store/cartSlice';
import { motion } from 'framer-motion';

interface CardProductProps {
  product: Product;
}

export default function CardProduct({ product }: CardProductProps) {
  const dispatch = useDispatch();

  const currentQuantityProduct = useSelector(
    getCurrentQuantityById(product.id)
  );

  const totalPrice = currentQuantityProduct * +product.price;

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
    <motion.div
      className={styles.cardWrapper}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={product.image}
        alt={product.description}
        width={258}
        loading="lazy"
        height={258}
        className={styles.productImage}
      />

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
            {totalPrice ? totalPrice : product.price}{' '}
            <abbr title="Ethereum">ETH</abbr>
          </span>
        </div>

        <Button onClick={handleAddCartItem}>Comprar</Button>
      </div>
    </motion.div>
  );
}
