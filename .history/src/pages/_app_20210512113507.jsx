
import Image from "next/image";
import "../classes/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Image
        className={classes.darkmodeicon}
        src="/darkmodeicon.svg"
        width={20}
        height={20}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;