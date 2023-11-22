import React from 'react'
import Fondo from '../../assets/bgHD.png'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";




export default function Main() {

  const { t , i18n} = useTranslation("global");

  return (
  <div>
    <div className='bienvenida'>
    <h2 className='text-center text-2xl m-4'>
        {t("welcome")} <span className='font-bold fundit'>{t("fundit")}</span>
      </h2>
     <div>
      <img className='w-full h-full relative' src={Fondo} alt="" />
     <Link to={"/flyers"}>
      <button className='absolute top-59 left-35  cursor-pointer border border-transparent w-24 h-10'></button>
     </Link>
     </div>
     
    </div>
  </div>
  )
}

