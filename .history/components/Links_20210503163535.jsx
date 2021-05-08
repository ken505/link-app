import Image from "next/Image";
import styles from "../styles/Home.module.css";

export function Links() {
  return (
    <div className={styles.grid}>
      <a href="https://twitter.com/ken_tsx" className={styles.card}>
        <Image
          className={styles.image}
          src="/twitter.svg"
          alt="twetter Logo"
          width={20}
          height={25}
          // Image を使って public の svg を呼びに行ってるよ。
          // 色はとりあえず svg の fill に指定してる。
        />
        <h2>Twitter</h2>
      </a>
      <a href="https://twitter.com/ken_tsx" className={styles.card}>
        <Image
          className={styles.image}
          src="/insta.svg"
          alt="twetter Logo"
          width={25}
          height={25}
        />
        <h2>Twitter</h2>
      </a>
    </div>
  );
}