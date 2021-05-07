// import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import { Headtab } from "../components/Headtab";

export default function Index() {
  return (
    <div className={styles.container}>
      <Headtab title="Ken's links" />
      <main className={styles.main}>
        <Headline title="Welcome to Ken's link 😸" />
        <Links />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
