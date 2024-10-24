'use client';

import { Fragment } from 'react';
import CardProduct from './components/ui/CardProduct';
import Footer from './components/ui/Footer';
import HeaderHomePage from './components/ui/Header';
import Loading from './components/ui/Loading';
import { useStarSoftProducts } from './hooks/useStarSoftProducts';

import styles from './Page.module.scss';

export default function Home() {
  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useStarSoftProducts();

  return (
    <div>
      <HeaderHomePage />
      {!isLoading && (
        <>
          <main className={styles.main}>
            {data?.pages.map((groupPages, index) => {
              return (
                <Fragment key={index}>
                  {groupPages.data.map((product) => (
                    <CardProduct key={product.id} product={product} />
                  ))}
                </Fragment>
              );
            })}
          </main>

          <section className={styles.section}>
            {hasNextPage && (
              <button
                disabled={!hasNextPage || isFetchingNextPage}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  fetchNextPage();
                }}
              >
                {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
              </button>
            )}
          </section>

          <Footer />
        </>
      )}
      {isLoading && <Loading />}
    </div>
  );
}
