'use client';

import { FirstDomainExampleScreen } from '@sambad/domains/first-domain';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <FirstDomainExampleScreen />
    </main>
  );
}
