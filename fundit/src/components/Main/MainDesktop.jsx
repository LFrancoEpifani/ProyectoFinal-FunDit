import React, { useState } from 'react'
import Isometric from '../../assets/bgHD.png'
import NavBar from '../NavBar/NavBar'
import { useTranslation } from 'react-i18next'
import PublicationModal from '../PublicationModal/PublicationModal'
import { Link } from 'react-router-dom'


export default function MainDesktop() {

    const {t, i18n} = useTranslation('global');

    const [openPublicationModal, setOpenPublicationModal] = useState(false);

  return (
    <div >
    <NavBar/>
    <div className=''>
    <div className='background-principal p-4 my-8'>
        <div className='font-semibold flex justify-center items-center gap-52'>
           <div>
            <div className='bienvenida-fundit text-6xl my-12 font-light flex justify-start '>
              <p>{t("explore")} <br/> {t("the")} <span className='text-blue-500 font-bold'> {t("experience")}</span> <br/> {t("found")}<br/> {t("click")}</p>
            </div>
           
            <div className='grid grid-cols-2 justify-center items-center gap-4 rounded-xl'>
               <Link to={"/ProyectoFinal-FunDit/flyers"}>
                <button className='btn-event-movil button-3d-movil '>{t("search")}</button>
               </Link>
                <button onClick={() => {setOpenPublicationModal(true)}} className='btn-create-event-movil button-3d-movil'>{t("create")}</button>
            </div>
           </div>
              <div className='flex flex-col justify-center'>
                <img
                className='w-[340px] border rounded-lg shadow-lg' 
                    src={Isometric} 
                    alt=''
                />    
           </div>
        </div>
        </div>
        </div>
    {openPublicationModal && (
      <div>
        <PublicationModal setOpenPublicationModal={setOpenPublicationModal}/>
      </div>
    )}
    </div>
  )
}
