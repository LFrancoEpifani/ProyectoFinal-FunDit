import React from "react";
import MainMovil from "./components/Main/MainMovil";
import NavBar from "./components/NavBar/NavBar";
import { EventProvider } from './eventContext'
import { useState } from 'react'

  

export default function Home() {

  return (
      <div className="background-principal">
        <EventProvider>
          <NavBar/>
          <MainMovil/>  
        </EventProvider>
      </div>
  );
}