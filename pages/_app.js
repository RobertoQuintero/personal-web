import Header from "../components/Organisms/Header";
import "../styles/globals.css";
import "../styles/styles.scss";
import Footer from "../components/Organisms/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import App from "next/app";
class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    console.log(router.route);
    return (
      <>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        {router.route === "/cv" ? null : <Footer />}
      </>
    );
  }
}

export default MyApp;
