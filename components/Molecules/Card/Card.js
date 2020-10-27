import { motion } from "framer-motion";

const Card = ({ name, description, url, image, urlCode }) => {
  return (
    <>
      <motion.article
        className="card"
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <div
          className="card__image"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <h3 className="card__name">{name}</h3>
        <p className="card__description">{description}</p>
        <div className="buttons">
          <a href={url} target="_blank">
            Visitar
          </a>
          <a href={urlCode} target="_blank">
            Código
          </a>
        </div>
      </motion.article>
      <style jsx>
        {`
          .buttons {
            position: relative;
            z-index: 1000;
            display: flex;
            justify-content: space-around;
          }
          .buttons a {
            font-size: 14px;
            color: #fff;
            background-color: #000;
            padding: 5px 10px;
            border-radius: 6px;
            border: 1px solid #000;
            transition: 0.2s;
            cursor: pointer;
          }

          .buttons a:hover {
            border: 1px solid #000;
            background-color: #fff;
            color: #000;
          }
        `}
      </style>
    </>
  );
};

export default Card;
