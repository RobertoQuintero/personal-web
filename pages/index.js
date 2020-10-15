import Head from "next/head";
import { ImageItem, imagesTop, imagesDown } from "../images";

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
              {imagesTop.map((image) => (
                <ImageItem key={image.name} name={image.name} />
              ))}
            </div>
            <div className="home__cardIcons">
              {imagesDown.map((image) => (
                <ImageItem key={image.name} name={image.name} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
