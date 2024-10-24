'use client';

import CardProduct from './components/ui/CardProduct';
import Footer from './components/ui/Footer';
import HeaderHomePage from './components/ui/Header';
import Loading from './components/ui/Loading';
import { useStarSoftProducts } from './hooks/useStarSoftProducts';

import styles from './Page.module.scss';

export default function Home() {
  const { data, isLoading } = useStarSoftProducts();

  return (
    <div>
      <HeaderHomePage />
      {!isLoading && (
        <>
          <main className={styles.main}>
            {data?.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </main>

          <Footer />
        </>
      )}
      {isLoading && <Loading />}
    </div>
  );
}
