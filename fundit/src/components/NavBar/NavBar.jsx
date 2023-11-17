import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Logo from "../../assets/fRed.png";
import BurgerContent from "./BurgerContent";
import Login from "../Login/Login";

export default function NavBar() {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLenguage, setIsLenguage] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const changeLenguage = () => {
    setIsLenguage(!isLenguage);
  };

  return (
    <div className="flex justify-between">
      <div className="navbar w-full p-1">
        <nav className="p-1 flex justify-between items-center">
          {/* Contenedor Izquierdo */}
          <div className="flex-1 flex justify-start">
            <button onClick={toggleMenu}>
              <Icon
                className={`text-2xl ${isMenuOpen ? "hidden" : ""}`}
                icon="material-symbols:menu"
                color="white"
              />
            </button>
            {isMenuOpen && <BurgerContent toggleMenu={toggleMenu} />}
          </div>

          {/* Contenedor Central */}
          <div className="flex-1 flex justify-center">
            <img className="imagenLogo" src={Logo} alt="FunDit Logo" />
          </div>

          {/* Contenedor Derecho */}
          <div className="flex-1 flex justify-end gap-2 items-center">
            <button>
              <Login />
            </button>
            <button onClick={changeLenguage}>
              {isLenguage ? (
                <Icon
                  className="w-6 h-6"
                  icon="openmoji:flag-united-states"
                />
              ) : (
                <Icon className="w-6 h-6" icon="openmoji:flag-spain" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
