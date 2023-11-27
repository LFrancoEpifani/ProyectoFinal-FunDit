import React from 'react'
import { Icon } from '@iconify/react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FilterModal({toggleModal}) {

    const [t, i18next] = useTranslation('global');

    const [isActive, setIsActive] = useState({
        Lunes: false,
        Martes: false,
        Miércoles: false,
        Jueves: false,
        Viernes: false,
        Sábado: false,
        Domingo: false,
        Arte: false,
        Música: false,
        Teatro: false,
        Alternativo: false,
        Baile: false,
        Literatura: false,
      });
      

      const toggleSwitch = (day) => {
        setIsActive(current => ({ ...current, [day]: !current[day] }));
      };


  return (
    <div>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="modal-filter p-4 rounded-lg shadow-lg relative w-72 h-80vh">
            <button onClick={toggleModal} className="absolute top-0 right-0 m-2">
              <Icon className='text-3xl' icon='iconamoon:close-thin' color='black' />
            </button>
            <div className='week'>
                <h2 className='title-cat'>Dia</h2>
                <div className='lunes flex flex-wrap justify-start items-center gap-2 mb-8 mt-2'>
                    <p>{t('monday')}</p>
                        <div className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer my-1 ${isActive['Lunes'] ? 'bg-[rgba(56,230,76,0.75)] justify-end' : 'bg-[rgba(0,0,0,0.8)] justify-start'}`}
                            onClick={() => toggleSwitch('Lunes')}>
                        <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                    </div>
                    <p>{t('tuesday')}</p>
                        <div className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer my-1 ${isActive['Martes'] ? 'bg-[rgba(56,230,76,0.75)] justify-end' : 'bg-[rgba(0,0,0,0.8)] justify-start'}`}
                            onClick={() => toggleSwitch('Martes')}>
                        <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                    </div>
                    <p>{t('wednesday')}</p>
                        <div className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer my-1 ${isActive['Miércoles'] ? 'bg-[rgba(56,230,76,0.75)] justify-end' : 'bg-[rgba(0,0,0,0.8)] justify-start'}`}
                            onClick={() => toggleSwitch('Miércoles')}>
                        <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                    </div>
                    <p>{t('thursday')}</p>
                        <div className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer my-1 ${isActive['Jueves'] ? 'bg-[rgba(56,230,76,0.75)] justify-end' : 'bg-[rgba(0,0,0,0.8)] justify-start'}`}
                            onClick={() => toggleSwitch('Jueves')}>
                        <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                    </div>
                    <p>{t('friday')}</p>
                        <div className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer my-1 ${isActive['Viernes'] ? 'bg-[rgba(56,230,76,0.75)] justify-end' : 'bg-[rgba(0,0,0,0.8)] justify-start'}`}
                            onClick={() => toggleSwitch('Viernes')}>
                        <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                    </div>
                    <p>{t('saturday')}</p>
                        <div className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer my-1 ${isActive['Sábado'] ? 'bg-[rgba(56,230,76,0.75)] justify-end' : 'bg-[rgba(0,0,0,0.8)] justify-start'}`}
                            onClick={() => toggleSwitch('Sábado')}>
                        <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                    </div>
                    <p>{t('sunday')}</p>
                        <div className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer my-1 ${isActive['Viernes'] ? 'bg-[rgba(56,230,76,0.75)] justify-end' : 'bg-[rgba(0,0,0,0.8)] justify-start'}`}
                            onClick={() => toggleSwitch('Viernes')}>
                        <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                    </div>
                </div>
            </div>
        <div className='categories'>
            <h2 className='title-cat'>Categorias</h2>
                <div className='lunes flex flex-wrap justify-center items-center gap-2 mb-8 mt-2'>
                    <p>{t('art')}</p>
                        <div className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer my-1 ${isActive['Arte'] ? 'bg-[rgba(56,230,76,0.75)] justify-end' : 'bg-[rgba(0,0,0,0.8)] justify-start'}`}
                            onClick={() => toggleSwitch('Arte')}>
                        <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                    </div>
                    <p>{t('music')}</p>
                        <div className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer my-1 ${isActive['Música'] ? 'bg-[rgba(56,230,76,0.75)] justify-end' : 'bg-[rgba(0,0,0,0.8)] justify-start'}`}
                            onClick={() => toggleSwitch('Música')}>
                        <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                    </div>
                    <p>{t('alternative')}</p>
                        <div className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer my-1 ${isActive['Alternativo'] ? 'bg-[rgba(56,230,76,0.75)] justify-end' : 'bg-[rgba(0,0,0,0.8)] justify-start'}`}
                            onClick={() => toggleSwitch('Alternativo')}>
                        <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                    </div>
                    <p>{t('dance')}</p>
                        <div className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer my-1 ${isActive['Baile'] ? 'bg-[rgba(56,230,76,0.75)] justify-end' : 'bg-[rgba(0,0,0,0.8)] justify-start'}`}
                            onClick={() => toggleSwitch('Baile')}>
                        <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                    </div>
                    <p>{t('literature')}</p>
                        <div className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer my-1 ${isActive['Literatura'] ? 'bg-[rgba(56,230,76,0.75)] justify-end' : 'bg-[rgba(0,0,0,0.8)] justify-start'}`}
                            onClick={() => toggleSwitch('Literatura')}>
                        <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
