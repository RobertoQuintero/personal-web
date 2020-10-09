const Card = ({ name, description, url, image }) => {
  return (
    <a href={url}>
      <article className="card">
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
      </article>
    </a>
  );
};

export default Card;
