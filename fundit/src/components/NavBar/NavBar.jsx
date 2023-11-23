import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { useTranslation } from "react-i18next";
import PublicationModal from "../PublicationModal/PublicationModal";



export default function NavBar() { 

  const {t, i18n} = useTranslation('global');

  const handleChangeLenguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLenguage(lang === "es");
  }

  const [isLenguage, setIsLenguage] = useState(false);
  const [openPublicationModal, setOpenPublicationModal] = useState(false);
  
  return (
   <>
    
        <nav className="bg-white m-4">
           <div className="flex justify-between">
           <div className="flex">
              <Link to={"/ProyectoFinal-FunDit/"}>
                <h2 className='font-porter text-xl rounded-lg w-7 h-7 '>F<span className="undit">UNDIT</span></h2>
              </Link>
            </div>
              <div className="flex gap-4 justify-center items-center">
              <Icon className='w-5 h-5' icon="ion:home" color='black'/>
              <Icon className='w-5 h-5' icon="ion:ticket" color='black'/>
               <Icon className='w-5 h-5' icon="mdi:event" color='black'/>
              <Login />

              
              {isLenguage ? (
                    <button onClick={() => handleChangeLenguage("en")}>
                        <Icon className='w-5 h-5' icon="ion:earth-sharp" color="black" />
                    </button>
              ) : (
                  <button onClick={() => handleChangeLenguage("es")}>
                    <Icon className='w-5 h-5' icon="ion:earth-sharp" color="black"/>
                  </button>
              )}
              </div>
           </div>
        </nav>
   {openPublicationModal && <PublicationModal setOpenPublicationModal={setOpenPublicationModal} />}
   </>
  );
}
