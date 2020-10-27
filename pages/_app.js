import Header from "../components/Organisms/Header";
import "../styles/globals.css";
import "../styles/styles.scss";
import Footer from "../components/Organisms/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import App from "next/app";
class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Footer />
      </>
    );
  }
}

export default MyApp;
