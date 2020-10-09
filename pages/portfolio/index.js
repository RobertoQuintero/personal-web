import React from "react";
import Card from "../../components/Molecules/Card/Card";
import { portfolio } from "../../portfolio";

const Portfolio = () => {
  return (
    <div className="break-points portfolio">
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
    </div>
  );
};

export default Portfolio;
