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
              <i>
                <img src="html.png" alt="" />
              </i>
              <i>
                <img src="css.png" alt="" />
              </i>
              <i>
                <img src="js.png" alt="" />
              </i>
              <i>
                <img src="pug.png" alt="" />
              </i>
              <i>
                <img src="sass.png" alt="" />
              </i>
            </div>
            <div className="home__cardIcons">
              <i>
                <img src="react.png" alt="" />
              </i>
              <i>
                <img src="node.png" alt="" />
              </i>
              <i>
                <img src="firebase.png" alt="" />
              </i>
              <i>
                <img src="npm.png" alt="" />
              </i>
              <i>
                <img src="git.png" alt="" />
              </i>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
