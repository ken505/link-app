import Head from "next/head";

export function Tab(props) {
  return (
    <Head>
      <title>{props.title}</title>
      {/* <meta name="link" content="link" /> */}
      <meta {props.name content="link"} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}