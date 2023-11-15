import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {Icon} from '@iconify/react'

export default function Logout() {

  const {isAuthenticated, isLoading, logout } = useAuth0();

    if (isLoading) {
      return <div>Loading ...</div>;
    }

  return (
      isAuthenticated && (
       
          <div className='flex items-center gap-6 mb-6'>
            <div className='border border-black bg-black rounded-full w-10 h-10 flex justify-center items-center'>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              <Icon className=' bg-black rounded-full w-10 h-10 p-2' icon="line-md:log-out" color='white'/>
            </button>
            </div>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='font-semibold text-lg'>Cerrar sesión</button>
            </div>

      )
  )
}

