import { FirstDomainExampleScreen } from '@sambad/domains/first-domain';
import Image from 'next/image';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <FirstDomainExampleScreen />
    </main>
  );
}
