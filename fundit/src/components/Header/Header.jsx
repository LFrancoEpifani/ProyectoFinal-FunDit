import React from 'react';
import Card from '../Card/Card'
import NavBar from '../NavBar/NavBar';


export default function Header() {
  return (
    <div className='h-screen w-full'>
      <NavBar/>
      <Card/>
    </div>
  );
}

