const { default: RocketIcon } = require("../../Atoms/Icons/RocketIcon");

const Logo = () => {
  return (
    <div className="section-menu__items">
      <h1 className="section-menu__logo">
        <a href="/" className="section-menu__logo-link">
          <span className="section-menu__logo-icon">
            <RocketIcon width={32} height={32} stroke="#fff" />
          </span>
          <span className="section-menu__title">Roberto Quintero</span>
        </a>
      </h1>
    </div>
  );
};

export default Logo;
