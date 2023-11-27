import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {Icon} from '@iconify/react'

export default function Logout() {

  const {isAuthenticated, logout } = useAuth0();

  return (
    <div>
      {isAuthenticated && (
          <div className='flex justify-center items-center'>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              <Icon className=' bg-black rounded-full w-5 h-5 p-1 xl:w-7 xl:h-7' icon="line-md:log-out" color='white'/>
            </button>
            </div>

      )}
      </div>
  )
}

