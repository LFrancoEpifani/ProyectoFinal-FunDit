import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { client } from "../../../../fundit-backend/.sanity/lib/client";

export default function PublicationModal({ setOpenPublicationModal }) {

  const [newFlyer, setNewFlyer] = useState({
    _type: "flyer",
    title: "",
    description: "",
    image: null,
    price: "",
    location: "",
    schedule: "",
    date: "",
    category: "",
  });


  const [previewImage, setPreviewImage] = useState(null);

  const today = new Date().toISOString().split('T')[0];


  const handleOnChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") { // Asegúrate de que el nombre del campo sea "image"
      setNewFlyer({ ...newFlyer, [name]: files[0] });
      
      // Crear una URL para la imagen seleccionada y actualizar el estado de la vista previa
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setNewFlyer({ ...newFlyer, [name]: value });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await client.create(newFlyer);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 flex justify-center items-center z-10">
      <div className="relative rounded-lg shadow-2xl w-80 h-90vh bg-white flex">
        <div className="file-upload-container p-5">
        {!previewImage && ( // Esto ocultará el label y el input si hay una imagen de vista previa
        <>
          <label htmlFor="file-upload">Subir Archivo</label>
          <input
            id="file-upload"
            className="border border-black p-2 rounded"
            type="file"
            name="image"
            onChange={handleOnChange}
          />
        </>
      )}
          {previewImage && (
            <img src={previewImage} alt="Vista previa de la imagen" className="w-full h-full" />
          )}
        </div>
        <div className="form-container border-l border-gray-300 p-5">
          <button onClick={() => setOpenPublicationModal(false)} className="absolute top-0 right-0 m-2">
            <Icon className="text-3xl" icon="ic:baseline-close" />
          </button>
            <h2 className="create-event text-center m-4">
                Crear Evento
            </h2>
            <hr/>
          <form onSubmit={handleSubmit} className=" uppercase p-5 formulario">
          <div className="grid grid-cols-2 justify-center items-center gap-6">
            <div className="flex flex-col m-2">
              <label className="m-2">TÍTULO</label>
              <input
                className="p-2 w-72 h-10 rounded m-1 border-2 border-gray-200"
                type="text"
                name="title"
                placeholder="Nombre del evento"
                value={newFlyer.title}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col m-4">
              <label className="m-2">Dirección</label>
              <input
                className="p-2 w-72 h-10 rounded m-1 border-2 border-gray-200"
                type="text"
                name="location"
                placeholder="Calle 123"
                value={newFlyer.location}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 justify-center items-center">
            <div className="flex flex-col gap m-2">
              <label className="m-2">Fecha</label>
              <input
                className="p-2 w-44 h-10 rounded m-1 border-2 border-gray-200"
                type="date"
                name="date"
                min={today}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="m-2">Precio</label>
              <input
                className="p-2 w-44 h-10 rounded m-1 border-2 border-gray-200"
                type="number"
                name="price"
                placeholder="0€"
                value={newFlyer.price}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="m-2">Horario</label>
              <input
                className="p-2 w-44 h-10 rounded m-1 border-2 border-gray-200"
                type="time"
                name="schedule"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 justify-center items-center gap-6">
            <div className="flex flex-col m-4">
              <label className="m-2">Categoria</label>
              <select
                name="category"
                onChange={handleOnChange}
                className="p-2 w-72 h-10 rounded m-1 border-2 border-gray-200"
              >
                <option value="musica">Música</option>
                <option value="arte">Arte</option>
                <option value="alternativo">Alternativo</option>
                <option value="literatura">Literatura</option>
                <option value="baile">Baile</option>
                <option value="teatro">Teatro</option>
              </select>
            </div>
            <div className="flex flex-col m-4">
              <label className="m-2">Descripción</label>
              <input
                className="w-72 h-10 rounded m-1 border-2 border-gray-200"
                type="text"
                name="description"
                maxLength="50"
                placeholder="Descripción del evento"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className='text-black m-10 border border-black w-32 h-9 rounded ' type='submit'>Crear</button>
          </div>
          
        </form>
        </div>
      </div>
    </div>
  );
}
