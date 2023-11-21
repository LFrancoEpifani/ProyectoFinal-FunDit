import React from 'react'
import NavBar from '../NavBar/NavBar'
import Fondo from '../../assets/background.png'



export default function Main() {
  return (
  <div>
    <NavBar/>
    <div className='bienvenida'>
      <img className='w-full h-full' src={Fondo} alt="" />
      <h2 className='text-center text-2xl '>
        Bienvenido a <span className='font-bold fundit'>FUNDIT</span>
      </h2>
    </div>
    <div className='flex justify-center items-center'>
    <button className='cartelera text-black text-center rounded-full w-40 h-8 font-semibold tracking-wider border border-black shadow-md'>
      CARTELERA
    </button> 
  </div>
  </div>
  )
}

