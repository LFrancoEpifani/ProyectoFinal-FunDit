import React from 'react'
import FunDit from '../../assets/funditlogo2.png'
import Card from "../Card/Card";

export default function Main() {
  return (
    <div className=''>
    <div className='shadow-lg flex justify-center items-center'>
        <img className='w-full h-screen object-cover object-center' src={FunDit} alt="" />
    </div>
    <div className=''>
        <Card />
    </div>
</div>
  )
}

