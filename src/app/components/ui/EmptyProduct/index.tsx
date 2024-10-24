import React from 'react';
import Button from '../Button';

import styles from './EmptyProduct.module.scss';
import { useRouter } from 'next/navigation';

export default function EmptyProduct() {
  const router = useRouter();

  function handleNavigatePageProducts() {
    router.push('/');
  }

  return (
    <div className={styles.container}>
      <p>Ainda não há items adicionados no carrinho</p>
      <span>Adicione itens clicando abaixo 😁</span>

      <Button productAdded onClick={handleNavigatePageProducts}>
        Adicionar produtos
      </Button>
    </div>
  );
}
