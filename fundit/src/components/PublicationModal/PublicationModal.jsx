import React, { useState, useContext } from "react";
import { Icon } from "@iconify/react";
import { EventContext } from '../../eventContext';

export default function PublicationModal({ setOpenPublicationModal }) {

  const { formData, setFormData, handleAddEvent } = useContext(EventContext);

  const today = new Date().toISOString().split('T')[0];


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleAddEvent(formData);

  };
  


  return (
    <div className="fixed inset-0 bg-gray-500 flex justify-center items-center z-10">
    <div className="relative rounded-lg shadow-2xl w-full h-full bg-white flex">

      <div className="form-container border-l border-gray-300 p-5">
        <button
          onClick={() => setOpenPublicationModal(false)}
          className="absolute top-0 right-0 m-2"
        >
          <Icon className="text-3xl" icon="ic:baseline-close" />
        </button>
        <h2 className="create-event text-center m-4 sm:m-2">Crear Evento</h2>
        <hr />
        
        <form onSubmit={handleSubmit} className="uppercase p-5 formulario sm:p-1 sm:grid sm:grid-cols-1">
          <div className="sm:grid sm:grid-cols-1 sm:gap-1 grid grid-cols-2 justify-center items-center gap-6">
            <div className="sm:grid sm:grid-cols-1 sm:justify-center sm:items-center flex flex-col m-2">
              <label className="m-2 sm:text-center">Título</label>
              <input
                className="sm:w-40 p-2 w-72 h-10 rounded m-1 border-2 border-gray-200"
                type="text"
                name="title"
                placeholder="Nombre del evento"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col m-4 sm:m-1 sm:grid sm:grid-cols-1 sm:justify-center sm:items-center">
              <label className="m-2 sm:text-center">Dirección</label>
              <input
                className="sm:w-40 p-2 w-72 h-10 rounded m-1 border-2 border-gray-200"
                type="text"
                name="ubication"
                placeholder="Calle 123"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="sm:flex sm:flex-wrap grid grid-cols-3 justify-center items-center">
            <div className="flex flex-col gap m-2">
              <label className="m-2 sm:text-center">Fecha</label>
              <input
                className="sm:w-24 p-2 w-44 h-10 rounded m-1 border-2 border-gray-200"
                type="date"
                name="date"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="m-2  sm:text-center">Precio</label>
              <input
                className="sm:w-24 p-2 w-44 h-10 rounded m-1 border-2 border-gray-200"
                type="number"
                name="price"
                placeholder="0€"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="m-2  sm:text-center">Horario</label>
              <input
                className="sm:w-24 sm:m-2 p-2 w-44 h-10 rounded m-1 border-2 border-gray-200"
                type="time"
                name="time"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 justify-center items-center gap-6 sm:gap-4 ">
            <div className="flex flex-col m-4 sm:m-1 ">
              <label className="m-2  sm:text-center">Categoria</label>
              <select
                name="category"
                onChange={handleInputChange}
                className="sm:w-32 p-2 w-72 h-10 rounded m-1 border-2 border-gray-200"
              >
                <option className="" value="musica">Música</option>
                <option className="" value="arte">Arte</option>
                <option className="" value="alternativo">Alternativo</option>
                <option className="" value="literatura">Literatura</option>
                <option className="" value="baile">Baile</option>
                <option className="" value="teatro">Teatro</option>
              </select>
            </div>
            <div className="flex flex-col m-4 sm:m-1">
              <label className="m-2 sm:text-center">Descripción</label>
              <input
                className="sm:w-40 w-72 h-10 rounded m-1 border-2 border-gray-200"
                type="text"
                name="description"
                minLength="100"
                maxLength="150"
                placeholder="Descripción del evento"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-center items-center">
              <label  className="flex justify-center items-center">
                urlImage:
                <input className="sm:w-32 w-72 h-10 rounded m-1 border-2 border-gray-200" type="text" name="urlImage" value={formData.urlImage} onChange={handleInputChange} />
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className='text-black m-1 border border-black w-28 h-9 rounded sm:m-4' type='submit'>Crear</button>
      </div>
    </form>
        
        
      </div>
    </div>
  </div>
);
}