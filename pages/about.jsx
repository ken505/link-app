import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Tab } from "../components/Tab";
import { Main } from "../components/Main";
// import Head from "next/head";
// import { Headline } from "../components/Headline";
// import { Links } from "../components/Links";

export default function About() {
  return (
    <div className={styles.container}>
      <Tab title="About Ken" />
      <Main />
      <Footer />
    </div>
  );
}
