import Banner from "../components/Organisms/Banner";
import Header from "../components/Organisms/Header";
import "../styles/globals.css";
import "../styles/styles.scss";
import { useRouter } from "next/router";
import Footer from "../components/Organisms/Footer/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  console.log(router);
  return (
    <>
      <Header />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
