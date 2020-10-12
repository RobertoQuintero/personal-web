import MainMenu from "../../Molecules/MainMenu";
import Logo from "../../Molecules/Logo";
import BarsIcon from "../../Atoms/Icons/BarsIcon";
import { createRef } from "react";

const menu = createRef();

const Header = () => {
  const toggleMenu = () => menu.current.classList.toggle("show");

  return (
    <div className="section-menu__container break-points">
      <header className={`section-menu `}>
        <Logo />
        <i className="section-menu__hamburguer" onClick={toggleMenu}>
          <BarsIcon width={32} height={32} stroke="#000" />
        </i>
        <MainMenu menu={menu} toggleMenu={toggleMenu} />
      </header>
    </div>
  );
};

export default Header;
