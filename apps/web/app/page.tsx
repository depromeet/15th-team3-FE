import Image from "next/image";
import styles from "./page.module.css";
import { FirstDomainExampleScreen } from "@sambad/domains/first-domain";

export default function Home() {
  return (
    <main className={styles.main}>
      <FirstDomainExampleScreen />
    </main>
  );
}
