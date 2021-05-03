import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Footer } from "../src/components/Footer";

export default function Home() {
  return (
  

        <h1 className={styles.title}>Welcome to Ken's link ! 😸</h1>

        <div className={styles.grid}>
          <a
            href="https://twitter.com/ken_tsx"
            //  className={styles.card}
            className={styles.card}
          >
            <Image
              className={styles.image}
              src="/twitter.svg"
              alt="twetter Logo"
              // width={72} height={16}
              width={25}
              height={25}
            />
            <h2>Twitter</h2>
            {/* <p>FI.</p> */}
          </a>

          <a
            href="https://twitter.com/ken_tsx"
            //  className={styles.card}
            className={styles.card}
          >
            <Image
              className={styles.image}
              src="/twitter.svg"
              alt="twetter Logo"
              // width={72} height={16}
              width={25}
              height={25}
            />
            <h2>Twitter</h2>
            {/* <p>FI.</p> */}
          </a>
          <a
            href="https://twitter.com/ken_tsx"
            //  className={styles.card}
            className={styles.card}
          >
            <Image
              className={styles.image}
              src="/twitter.svg"
              alt="twetter Logo"
              // width={72} height={16}
              width={25}
              height={25}
            />
            <h2>Twitter</h2>
            {/* <p>FI.</p> */}
          </a>
        </div>

    </div>
  );
}