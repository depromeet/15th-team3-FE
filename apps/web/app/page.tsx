import { FirstDomainExampleScreen } from '@sambad/web-domains/first-domain';

import styles from './page.module.css';

export default function Home() {
  console.log('test');

  return (
    <main className={styles.main}>
      <FirstDomainExampleScreen />
    </main>
  );
}
