import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Logo from "../../assets/onlyF.png";
import BurgerContent from "./BurgerContent";
import Login from "../Login/Login";
import { useTranslation } from "react-i18next";



export default function NavBar() { 

  const {t, i18n} = useTranslation('global');

  const handleChangeLenguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLenguage(lang === "es");
  }

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLenguage, setIsLenguage] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };  
  
  return (
    <div className="flex justify-between">
      <div className="navbar w-full p-1">
        <nav className="p-1 flex justify-between items-center">
          {/* Contenedor Izquierdo */}
          <div className="flex-1 flex justify-start">
            <button onClick={toggleMenu}>
              <Icon
                className={`menu-burger ${isMenuOpen ? "hidden" : ""}`}
                icon="material-symbols:menu"
                color="white"
              />
            </button>
            {isMenuOpen && <BurgerContent toggleMenu={toggleMenu} />}
          </div>

          {/* Contenedor Central */}
          <div className="flex-1 flex justify-center">
            <img className="imagenLogo object-contain" src={Logo} alt="FunDit Logo" />
          </div>

          {/* Contenedor Derecho */}
          <div className="flex-1 flex justify-end gap-2 items-center">
              <Login />
            <div className="flex justify-center items-center">
              {isLenguage ? (
                    <button onClick={() => handleChangeLenguage("en")}>
                        <Icon className="w-7 h-7" icon="openmoji:flag-united-states" />
                    </button>
              ) : (
                  <button onClick={() => handleChangeLenguage("es")}>
                    <Icon className="w-7 h-7" icon="openmoji:flag-spain" />
                  </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
