import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {Icon} from '@iconify/react'


export default function Login() {

    const { loginWithRedirect } = useAuth0();

  return (
    <>
        <button className='flex justify-center items-center gap-10' onClick={() => loginWithRedirect()}>
            <Icon className=' bg-white rounded-full w-6 h-6 p-1' icon="fe:user" color='black'/>
        </button>
    </>
  )
}

