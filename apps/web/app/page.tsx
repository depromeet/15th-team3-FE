'use client';

import { FirstDomainExampleScreen } from '@sambad/web-domains/first-domain';
import { useEffect } from 'react';

import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    console.log('test-main');
  }, []);

  return (
    <main className={styles.main}>
      <FirstDomainExampleScreen />
    </main>
  );
}
