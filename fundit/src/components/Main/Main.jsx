import React from 'react'
import FunDit1 from '../../assets/funditlogo2.png'
import FunDit2 from '../../assets/funditlogo3.png'
import Card from "../Card/Card";

export default function Main() {
  return (
    <div className=''>
    <div className='shadow-lg flex justify-center items-center'>
        <img className='w-3/6 h-screen object-cover object-left' src={FunDit2} alt="" />
        <img className='w-2/6 h-screen object-cover object-center' src={FunDit1} alt="" />
        <img className='w-3/6 h-screen object-cover object-right' src={FunDit2} alt="" />
    </div>
    <div className=''>
        <Card />
    </div>
</div>
  )
}

