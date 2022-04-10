import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../../src/styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
