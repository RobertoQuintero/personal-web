import React from "react";

import Button from "../../Atoms/Button";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(web.jpg)`,
  };
  return (
    <>
      <section className="section-banner" style={bannerStyle}>
        <div className="section-banner__container break-points">
          <div className="section-banner__text">
            <h2 className="section-banner__title">
              Programador Javascript Jr en Poza Rica Ver
            </h2>
            <Button />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
