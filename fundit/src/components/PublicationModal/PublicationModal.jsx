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


  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isEventCreated, setIsEventCreated] = useState(false);

  const today = new Date().toISOString().split('T')[0];


  const handleOnChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") { 
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
    
    if (!newFlyer.title) {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }
  
    if (newFlyer.image) {
      try {
        // Subir la imagen primero
        const imageAsset = await client.assets.upload('image', newFlyer.image);
        const imageAssetId = imageAsset._id;

  
        // Crear el flyer con la referencia de la imagen
        await client.create({
          ...newFlyer,
          image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: imageAssetId
            }
          }
        });
  
        // Resto del código para resetear el formulario y mostrar mensaje de éxito
        setNewFlyer({
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
        setPreviewImage(null);
        setIsEventCreated(true);
  
        setTimeout(() => {
          setIsEventCreated(false);
        }, 3000); // Desaparece después de 3 segundos
  
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("No file selected");
    }
  };
  


  return (
    <div className="fixed inset-0 bg-gray-500 flex justify-center items-center z-10">
    <div className="relative rounded-lg shadow-2xl w-full sm:w-80 h-90vh bg-white flex">

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
                className="sm:w-32 p-2 w-72 h-10 rounded m-1 border-2 border-gray-200"
                type="text"
                name="title"
                placeholder="Nombre del evento"
                value={newFlyer.title}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col m-4 sm:m-1 sm:grid sm:grid-cols-1 sm:justify-center sm:items-center">
              <label className="m-2 sm:text-center">Dirección</label>
              <input
                className="sm:w-32 p-2 w-72 h-10 rounded m-1 border-2 border-gray-200"
                type="text"
                name="location"
                placeholder="Calle 123"
                value={newFlyer.location}
                onChange={handleOnChange}
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
                min={today}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="m-2  sm:text-center">Precio</label>
              <input
                className="sm:w-24 p-2 w-44 h-10 rounded m-1 border-2 border-gray-200"
                type="number"
                name="price"
                placeholder="0€"
                value={newFlyer.price}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="m-2  sm:text-center">Horario</label>
              <input
                className="sm:w-24 sm:m-2 p-2 w-44 h-10 rounded m-1 border-2 border-gray-200"
                type="time"
                name="schedule"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 justify-center items-center gap-6 sm:gap-4 ">
            <div className="flex flex-col m-4 sm:m-1 ">
              <label className="m-2  sm:text-center">Categoria</label>
              <select
                name="category"
                onChange={handleOnChange}
                className="sm:w-24 p-2 w-72 h-10 rounded m-1 border-2 border-gray-200"
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
              <label className="m-2  sm:text-center">Descripción</label>
              <input
                className="sm:w-24 w-72 h-10 rounded m-1 border-2 border-gray-200"
                type="text"
                name="description"
                minLength="100"
                maxLength="150"
                placeholder="Descripción del evento"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className='text-black m-1 border border-black w-28 h-9 rounded sm:m-4' type='submit'>Crear</button>
          
          <div className="file-upload-container p-5">
        {!previewImage && (
          <>
            <label htmlFor="file-upload"></label>
            <input
              id="file-upload"
              className="text-black m-1 border border-black w-28 h-9 rounded "
              type="file"
              name="image"
              onChange={handleOnChange}
            />
          </>
        )}
        </div>
      </div>
      {isEventCreated && (
        <div className="absolute top-0 left-0 p-4 rounded flex h-full w-full justify-center items-center bg-black bg-opacity-80 gap-2">
        <p className="text-xl text-white">
          Evento Publicado
        </p>
      <Icon className="text-2xl" icon="mingcute:check-fill" color="green"/>
      </div>
      )}
          </form>
        
        
      </div>
    </div>
  </div>
);
}
