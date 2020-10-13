import React from "react";

const Footer = () => {
  return (
    <footer className="footer__container ">
      <div className="footer break-points ">
        <div className="footer__social">
          <a href="https://github.com/RobertoQuintero" target="_blank">
            <i className="fa fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/roberto-carlos-quintero-martinez-0218a41ab/"
            target="_blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/nery.quintero" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://wa.me/5217828802912" target="_blank">
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>
        <p>Roberto Quintero - 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
