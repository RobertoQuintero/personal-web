import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roberto Quintero</title>
      </Head>
      <main className="home">
        <div className="home__card">
          <div className="home__cardImage">
            <img src="roberto.jpg" alt="roberto" />
          </div>
          <div className="home__cardText">
            <h2>Programador Javascript Jr.</h2>
            <div className="home__cardIcons">
              <a href="#">
                <span className="fa fa-github"></span>
              </a>
              <a href="#">
                <span className="fa fa-linkedin"></span>
              </a>
              <a href="#">
                <span className="fa fa-facebook"></span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
