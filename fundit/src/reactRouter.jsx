import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Home from './Home'
import Flyers from './Flyers'

const router = createBrowserRouter([
  {
    path: "/ProyectoFinal-FunDit/",
    element: <Home/>,
  },
  {
    path: "/ProyectoFinal-FunDit/flyers",
    element: <Flyers/>
  },
]);

export default router;