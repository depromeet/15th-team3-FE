import Image from "next/image";
import styles from "../page.module.css";
import { SecondDomainExampleScreen } from "@sambad/domains/second-domain";

export default function Second() {
  return (
    <main className={styles.main}>
      <SecondDomainExampleScreen />
    </main>
  );
}
