import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {Icon} from '@iconify/react';
import Logout from  '../Login/Logout';
import Logo from '../../assets/sinfoto.png'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


export default function BurgerContent({ setMenuOpen, setOpenPublicationModal }) {

    const closeNavBarAndOpenPublicationModal = () =>{
        setMenuOpen(false);
        setOpenPublicationModal(true);
    }
    const { t , i18n} = useTranslation("global");

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div className=''>Loading ...</div>;
      }

  return (
    <div className='bg-opacity-60 bg-black fixed top-0 left-0 h-screen w-full flex justify-center items-center z-50 cursor-pointer'>
      <div className='burger h-screen w-2/3 fixed top-0 left-0 shadow-2xl'>
      <div className=''>
            <Icon onClick={() => setMenuOpen(false)} className='text-4xl ml-auto my-1 mr-1 transition-all duration-500 ease-in' icon='iconamoon:close-thin' />
          </div>
          {!isAuthenticated && (
            <div className='flex justify-start items-end mx-3 gap-1'>
            <img className='imagenUsuario rounded-full w-12 h-12 object-contain' src={Logo} alt="" />
            <p className='font-bold mx-4'>Nombre usuario</p>
          </div>
             )}    
        {isAuthenticated && (
        <div className="flex justify-start items-end gap-2">
          <img className='rounded-full w-12 h-12' src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
        </div>
      )}
        <div className='sections my-12 mx-4'>
        <div className='flex items-center gap-6 my-6'>
                <div className='border border-black bg-black rounded-full w-10 h-10 flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 43 37" fill="none">
                    <path d="M22.3772 0.303791C22.1229 0.106917 21.8096 0 21.4871 0C21.1646 0 20.8513 0.106917 20.597 0.303791L0 16.2497L1.78163 18.4868L4.3 16.5372V34.1538C4.30152 34.9082 4.60402 35.6313 5.1413 36.1647C5.67858 36.6981 6.40684 36.9985 7.16667 37H35.8333C36.5932 36.9985 37.3214 36.6981 37.8587 36.1647C38.396 35.6313 38.6985 34.9082 38.7 34.1538V16.55L41.2184 18.4996L43 16.2625L22.3772 0.303791ZM24.3667 34.1538H18.6333V22.7689H24.3667V34.1538ZM27.2333 34.1538V22.7689C27.2326 22.0143 26.9303 21.2908 26.3929 20.7572C25.8554 20.2236 25.1267 19.9235 24.3667 19.9227H18.6333C17.8733 19.9235 17.1446 20.2236 16.6071 20.7572C16.0697 21.2908 15.7674 22.0143 15.7667 22.7689V34.1538H7.16667V14.3185L21.5 3.23254L35.8333 14.3328V34.1538H27.2333Z" fill="white"/>
                </svg>
                </div>
                    <Link to={"/"}>
                        <button className='font-semibold text-lg'>{t('home')}</button>
                    </Link>
            </div>
            <div className='flex items-center gap-6 mb-6'>
                <div className='border border-black bg-black rounded-full w-10 h-10 flex justify-center items-center'>
                    <Icon className=' text-2xl' icon="mdi:events" color='white'/>
                </div>
                <button className='font-semibold text-lg'>{t('navEvents')}</button>
            </div>
            <div className='flex items-center gap-6 mb-6'>
            <div className='border border-black bg-black rounded-full w-10 h-10 flex justify-center items-center'>
                <Icon className=' text-2xl' icon="carbon:ticket" color='white'/>
            </div>
                <button className='font-semibold text-lg'>{t('tickets')}</button>
            </div>
            <div className='flex items-center gap-6 mb-6'>
            <div className='border border-black bg-black rounded-full w-10 h-10 flex justify-center items-center'>
                <Icon className=' text-3xl' icon="ic:round-plus" color='white'/>
            </div>
                <button onClick={closeNavBarAndOpenPublicationModal} className='font-semibold text-lg'>{t('public')}</button>
            </div>
            <div className='flex items-center gap-6 mb-6'>
            <div className='border border-black bg-black rounded-full w-10 h-10 flex justify-center items-center'>
                <Icon className=' text-2xl' icon="bxs:user" color='white'/>
            </div>
                <button className='font-semibold text-lg'>{t('profile')}</button>
            </div>
            {isAuthenticated && (
                <div>
                    <Logout/>
                </div>
            )}
            
        </div>
        </div>
        </div>
  )
}

