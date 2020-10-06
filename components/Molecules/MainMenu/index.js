import Link from "next/link";

const MainMenu = (props) => {
  const handleChangeClass = () => {
    props.onClick();
  };

  return (
    <nav className={`section-menu__navigation ${props.show}`}>
      <ul className="section-menu__list">
        <li className="section-menu__item">
          <Link href="/" onClick={() => handleChangeClass()}>
            <a>Inicio</a>
          </Link>
        </li>
        <li className="section-menu__item">
          <Link href="/about" onClick={() => handleChangeClass()}>
            <a>Bio</a>
          </Link>
        </li>
        <li className="section-menu__item">
          <Link href="/portfolio" onClick={() => handleChangeClass()}>
            <a>Portafolio</a>
          </Link>
        </li>
        <li className="section-menu__item">
          <Link href="/contact" onClick={() => handleChangeClass()}>
            <a>Contacto</a>
          </Link>
        </li>
        {/* <li className="section-menu__item button-menu">
          <Link
            href="/register"
            activeClassName="activo"
            onClick={() => handleChangeClass()}
          >
            Register Now
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default MainMenu;
