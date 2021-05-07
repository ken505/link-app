import Head from "next/head";
import styles from "../styles/Home.module.css";
// import { Footer } from "../components/Footer";
import { Links } from "../components/Links";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ken's link 🐱</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Headline />
      <Links />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
