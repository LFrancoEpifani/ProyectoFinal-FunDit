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
    <div className=''>
    <div className=''>
        <div className='font-semibold grid grid-cols-1 justify-center items-center gap-4'>
           <div>
           
            <div className='bienvenida-fundit-movil'>
              <p>{t("explore")} <br/> {t("the")} <span className='text-blue-500 font-bold'> {t("experience")}</span> <br/> {t("found")}<br/> {t("click")}</p>
            </div>
           </div>
              <div className=''>
                <img
                className='w-[240px] border rounded-lg shadow-lg m-auto' 
                    src={Isometric} 
                    alt=''
                />    
           </div>
        </div>
        </div>
        </div>
        <div className=''>
               <Link to={"/ProyectoFinal-FunDit/flyers"}>
                <button className='btn-event-movil button-3d-movil'>{t("search")}</button>
               </Link>
                <button onClick={() => {setOpenPublicationModal(true)}} className='btn-create-event-movil button-3d-movil'>{t("create")}</button>
            </div>
    {openPublicationModal && (
      <div>
        <PublicationModal setOpenPublicationModal={setOpenPublicationModal}/>
      </div>
    )}
    </div>
  )
}
