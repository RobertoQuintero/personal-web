import Banner from "../components/Organisms/Banner";
import Header from "../components/Organisms/Header";
import "../styles/globals.css";
import "../styles/styles.scss";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  console.log(router);
  return (
    <>
      <Header />
      {router.pathname === "/" ? (
        <Banner />
      ) : (
        <section
          className="section-banner__pages"
          style={{ backgroundImage: "url(web.jpg)" }}
        ></section>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
