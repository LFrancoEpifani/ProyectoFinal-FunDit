import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Home from './Home'
import Flyers from './Flyers'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/flyers",
    element: <Flyers/>

  },
  
]);

export default router;