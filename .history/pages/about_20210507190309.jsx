import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
// import { Links } from "../components/Links";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About 🐱</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>{"About Ken} >
      <Links />
      </main>

      {/* golbalss.css が効いて Footer がセンターにきてるんだけど・・・ */}
      <Footer />
    </div>
  );
}