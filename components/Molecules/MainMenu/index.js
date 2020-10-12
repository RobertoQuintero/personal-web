import Link from "next/link";

const MainMenu = ({ menu, toggleMenu }) => {
  return (
    <nav
      className={`section-menu__navigation `}
      ref={menu}
      onClick={toggleMenu}
    >
      <ul className="section-menu__list">
        <li className="section-menu__item">
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li className="section-menu__item">
          <Link href="/about">
            <a>Bio</a>
          </Link>
        </li>
        <li className="section-menu__item">
          <Link href="/portfolio">
            <a>Portafolio</a>
          </Link>
        </li>
        <li className="section-menu__item">
          <Link href="/contact">
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
