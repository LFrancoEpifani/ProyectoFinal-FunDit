import React from 'react';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Logo from '../../assets/FunDit.png';
import BurgerContent from './BurgerContent';
import Login from '../Login/Login'

export default function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex justify-between'>
            <div className='bg-black w-full'>
                <nav className='p-2 flex items-center justify-between'>
                    <button onClick={toggleMenu}>
                        <Icon
                        
                            className={`text-2xl ${isMenuOpen ? 'hidden' : ''}`}
                            icon='material-symbols:menu'
                            color='white'
                        />
                    </button>
                    {isMenuOpen && (
                        <BurgerContent toggleMenu={toggleMenu} />
                    )}
                    <img className='w-20 h-7' src={Logo} alt='FunDit Logo' />

                    <div className='flex gap-2'>
                        <button>
                        <Icon className=' bg-white rounded-full w-6 h-6 p-1' icon="material-symbols:search"/>
                        </button>
                        <button>
                            <Login/>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}
