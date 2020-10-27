import { motion } from "framer-motion";
import SeoComponent from "../../components/Atoms/SeoComponent";
import Card from "../../components/Molecules/Card/Card";
import { portfolio } from "../../portfolio";

const Portfolio = () => {
  const seo = {
    title: "Portafolio",
    description: "Bienvenidos a mi página web gracias por visitarme",
    url: "https://robertoquintero.vercel.app/portfolio",
    imageUrl: "https://robertoquintero.vercel.app/roberto.jpg",
  };
  return (
    <>
      <main className="break-points portfolio">
        <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
          <SeoComponent seo={seo} />
          <h2 className="page__title">Portafolio y prácricas</h2>
          <div className="portfolio__items">
            {portfolio.map((item) => (
              <Card
                key={item.name}
                name={item.name}
                description={item.description}
                image={item.image}
                url={item.url}
                urlCode={item.urlCode}
              />
            ))}
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Portfolio;
