import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
        <nav className="m-4 md:mx-20 lg:mx-30 xl:mx-40">
           <div className="flex justify-between ">
           <div className="flex justify-center items-center">
              <Link to={"/ProyectoFinal-FunDit/"}>
                <h2 className='font-porter text-xl rounded-lg w-7 h-7 lg:text-2xl'>F<span className="undit">UNDIT</span></h2>
              </Link>
            </div>
              <div className="flex gap-4 justify-center items-center cursor-pointer">
              <Link to={"/ProyectoFinal-FunDit/"}>
              <Icon className='w-5 h-5 lg:w-7 lg:h-7' icon="ion:home" color='black'/>
              </Link>
               <Link to={"/ProyectoFinal-FunDit/flyers"}>
               <Icon className='w-5 h-5 lg:w-7 lg:h-7' icon="mdi:event" color='black'/>
               </Link>
              <Icon onClick={() => setOpenPublicationModal(true)} className='w-5 h-5 lg:w-7 lg:h-7' icon="ph:plus-fill" color='black'/>

              {openPublicationModal && (
                <div>
                  <PublicationModal setOpenPublicationModal={setOpenPublicationModal}/>
                </div>
            )}
                      
              {isLenguage ? (
                    <button onClick={() => handleChangeLenguage("en")}>
                        <Icon className='w-5 h-5 lg:w-7 lg:h-7' icon="ion:earth-sharp" color="black" />
                    </button>
              ) : (
                  <button onClick={() => handleChangeLenguage("es")}>
                    <Icon className='w-5 h-5 lg:w-7 lg:h-7' icon="ion:earth-sharp" color="black"/>
                  </button>
              )}
            <button className='flex justify-center items-center gap-10'>
                          <Icon className='w-5 h-5 lg:w-7 lg:h-7' icon="mingcute:user-4-fill" color='black'/>
                    </button>

              </div>
           </div>
        </nav>
   {openPublicationModal && <PublicationModal setOpenPublicationModal={setOpenPublicationModal} />}
   </>
  );
}
