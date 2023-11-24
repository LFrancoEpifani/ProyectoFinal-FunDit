import React, { useState } from 'react'
import Isometric from '../../assets/bgHD.png'
import NavBar from '../NavBar/NavBar'
import { useTranslation } from 'react-i18next'
import PublicationModal from '../PublicationModal/PublicationModal'
import { Link } from 'react-router-dom'


export default function MainMovil() {

    const {t, i18n} = useTranslation('global');

    const [openPublicationModal, setOpenPublicationModal] = useState(false);

  return (
    <div className='text-center'>
    <NavBar/>
        <div className='font-semibold grid grid-cols-1 justify-center items-center gap-4  m-6 lg:flex lg:justify-center lg:items-center xl:gap-32'>
            <div className='bienvenida-fundit-movil text-xl flex justify-center items-center  md:text-5xl md:mt-8 md:leading-snug lg:text:6xl lg:leading-snug xl:flex xl:text-6xl xl:leading-tight '>
                <p>{t("explore")} <br/> {t("the")} <span className='text-blue-500 font-bold'> {t("experience")}.</span> <br/> {t("found")}<br/> {t("click")}</p>
            </div>
              <div className='flex flex-wrap'>
                <img
                className='w-[260px] p-6 m-auto md:w-[340px] md:mt-8 border rounded-md' 
                    src={Isometric} 
                    alt=''
                />    
           </div>
        </div>
        <div className='text-lg flex justify-center items-center text-center gap-3 sm:flex-col md:flex md:justify-start lg:justify-evenly lg:items-center lg:gap-6 lg:mx-56 xl:flex-row'>
               <Link to={"/ProyectoFinal-FunDit/flyers"}>
                <button className='btn-event-movil w-60 h-10 p-2 md:p-3 md:w-60 md:h-10 md:text-center xl:text-lg xl:h-12 xl:w-72 xl:text-center'>{t("search")}</button>
               </Link>
                <button onClick={() => {setOpenPublicationModal(true)}} className='btn-create-event-movil w-60 h-10 p-2 md:p-3 md:w-60 md:h-10 md:text-center xl:text-lg xl:h-12 xl:w-72 xl:text-center'>{t("create")}</button>
            </div>
    {openPublicationModal && (
      <div>
        <PublicationModal setOpenPublicationModal={setOpenPublicationModal}/>
      </div>
    )}
    </div>
  )
}
