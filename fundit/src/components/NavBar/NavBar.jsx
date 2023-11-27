import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Logout from '../Login/Logout'
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";
import PublicationModal from "../PublicationModal/PublicationModal";


export default function NavBar() { 

  const {t, i18n} = useTranslation('global');

  const handleChangeLenguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLenguage(lang === "es");
  }
  const [isLenguage, setIsLenguage] = useState(false);
  const [openPublicationModal, setOpenPublicationModal] = useState(false);
  
  const {user, isAuthenticated } = useAuth0();
  
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
              <Icon className='w-5 h-5 lg:w-7 lg:h-7' icon="ion:home" color='black'/>
               <Icon className='w-5 h-5 lg:w-7 lg:h-7' icon="mdi:event" color='black'/>
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
              {!isAuthenticated && (
              <Login />
              )}
               {isAuthenticated && (
                <div className="flex justify-center items-center">
                    <Logout/>
                </div>
            )}

               {isAuthenticated && (
                <div className="flex justify-center items-center gap-2">
                    <img className='rounded-full w-7 h-7' src={user.picture} alt={user.name} />
                </div>
               )}
         
              </div>
           </div>
        </nav>
   {openPublicationModal && <PublicationModal setOpenPublicationModal={setOpenPublicationModal} />}
   </>
  );
}
