import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Image
        // className={classes.image}
        src="darkmodeicon"
        alt=
        width=
        height=
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
