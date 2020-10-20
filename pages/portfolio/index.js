import React from "react";
import SeoComponent from "../../components/Atoms/SeoComponent";
import Card from "../../components/Molecules/Card/Card";
import { portfolio } from "../../portfolio";

const seo = {
  title: "Portafolio",
  description: "Estos son algunos proyectos en los que he trabajado",
  url: "https://robertoquintero.vercel.app/portfolio",
  imageUrl: "https://robertoquintero.vercel.app/roberto.jpg",
};

const Portfolio = () => {
  return (
    <>
      <SeoComponent seo={seo} />
      <main className="break-points portfolio">
        <h2 className="page__title">Portafolio y prácricas</h2>
        <div className="portfolio__items">
          {portfolio.map((item) => (
            <Card
              key={item.name}
              name={item.name}
              description={item.description}
              image={item.image}
              url={item.url}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Portfolio;
