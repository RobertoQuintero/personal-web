import MainMenu from "../../Molecules/MainMenu";
import Link from "next/link";
import Logo from "../../Molecules/Logo";
import BarsIcon from "../../Atoms/Icons/BarsIcon";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState("");

  const handleToggle = () => {
    show === "show" ? setShow("") : setShow("show");
  };

  const changeClass = () => {
    setShow("");
  };
  return (
    <div className="section-menu__container break-points">
      <header className={`section-menu `}>
        <Logo />
        <i className="section-menu__hamburguer" onClick={handleToggle}>
          <BarsIcon />
        </i>
        <MainMenu show={show} onClick={changeClass} />
      </header>
    </div>
  );
};

export default Header;
