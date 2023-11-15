import React from 'react'
import FunDit from '../../assets/funditlogo3.png'
import Card from "../Card/Card";

export default function Main() {
  return (
    <div className=''>
    <div className='w-full h-screen shadow-lg flex justify-center items-center'>
        <img className='h-screen object-cover' src={FunDit} alt="" />
    </div>
    <div className=''>
        <Card />
    </div>
</div>
  )
}

