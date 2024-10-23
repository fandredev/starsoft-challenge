import React from 'react';
import { TailSpin } from 'react-loader-spinner';

import styles from './Loading.module.scss';

export default function Loading() {
  return (
    <section className={styles.loading}>
      <TailSpin
        visible
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
      Carregando produtos. Aguarde um momentinho, ok? 😁⏳
    </section>
  );
}
