import React from 'react';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Logo from '../../assets/FunDit.png';

export default function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex justify-between'>
            <div className='bg-black w-full'>
                <nav className='p-2 flex items-center justify-between'>
                    <Icon
                        onClick={toggleMenu}
                        className='text-2xl'
                        icon='material-symbols:menu'
                        color='white'
                    />
                    <img className='w-18 h-6' src={Logo} alt='FunDit Logo' />

                    <div className='flex gap-2'>
                        <button>
                        <Icon className=' bg-white rounded-full w-6 h-6 p-1' icon="material-symbols:search"/>
                        </button>
                        <button>
                        <Icon className=' bg-white rounded-full w-6 h-6 p-1' icon="fe:user"/>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}
