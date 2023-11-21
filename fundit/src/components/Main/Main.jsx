import React from 'react'
import NavBar from '../NavBar/NavBar'
import Fondo from '../../assets/background2.png'



export default function Main() {
  return (
  <div>
    <NavBar/>
    <div className='bienvenida'>
    <h2 className='text-center text-2xl m-4'>
        Bienvenido a <span className='font-bold fundit'>FUNDIT</span>
      </h2>
      <img className='w-full h-full' src={Fondo} alt="" />
    </div>
    <div className='flex justify-center items-center'>
    <button className='text-black text-center rounded-full w-40 h-8 font-semibold tracking-wider border border-black shadow-md'>
      CARTELERA
    </button> 
  </div>
  </div>
  )
}

