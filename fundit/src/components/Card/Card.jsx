import { useState, useContext } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from 'react-i18next';
import { EventContext } from '../../eventContext';
import { deleteEvent } from "../../eventHelpers";


export default function Card() {


  const { t} = useTranslation("global");
  const [flyers, setFlyers] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const { events, setEvents } = useContext(EventContext);

  const handleDelete = (id) => {
    deleteEvent(id)
      .then(() => {
        // Actualizar el estado de eventos después de borrar uno
        setEvents(currentEvents => currentEvents.filter(event => event.id !== id));
      });
  };

  function formatDate(dateString) {
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const dateParts = dateString.split('-'); 
    const year = dateParts[0];
    const month = months[parseInt(dateParts[1], 10) - 1]; 
    const day = parseInt(dateParts[2], 10);

    return `${day} de ${month}`;
  }

  return ( 
    <div className="text-center bg-flyers">
      <h2 className="calendar text-lg mt-8 mb-4 mx-8 xl:text-5xl">{t('events')}</h2>
      <div className="flex justify-center items-center gap-2">
        <input className="border-2 border-gray-300 h-9 pr-2 rounded-lg shadow-2xl xl:w-72" type="text" placeholder="Buscador..."/>
        <select
        className="border-2 border-gray-300 py-1 px-2 shadow-2xl text-black rounded-md w-24 "
          value={categoriaSeleccionada}
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
        >
          <Icon icon="mi:filter" />
          <option value="Todos">{t('all')}</option>
          <option value="música">{t('music')}</option>
          <option value="arte">{t('art')}</option>
          <option value="baile">{t('dance')}</option>
          <option value="literatura">{t('literature')}</option>
          <option value="alternativo">{t('alternative')}</option>
        </select>
          {isModalOpen && (
            <FilterModal toggleModal={() => setModalOpen(!isModalOpen)} />
          )}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {events
          .filter(
            (event) =>
              categoriaSeleccionada === "Todos" || event.category === categoriaSeleccionada
          )
          .map((event) => (
            <div key={event._id} className="card"> 
              <Icon onClick={() => setIsFlipped(!isFlipped)} className="flip-icon" icon="mi:switch"/>
              <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                  className="card-front text-white"
                  style={{ backgroundImage: `url(${event.urlImage})` }}
                >
                  <div className="bg-black absolute bottom-0 w-full p-3 flex justify-between items-center rounded-b-md">
                    <h2 className="text-white font-bold uppercase text-center text-xl">{event.title}</h2>
                    <div className="icons-bar flex gap-2 justify-center items-center">
                    </div>
                   
                <Icon onClick={() => handleDelete(event.id)} className="flex justify-end items-end text-2xl rounded-full w-7 h-7" icon="mdi-light:delete" color="red"/>
            
                  </div>
                </div>
                
                <div
                onClick={() => setIsFlipped(!isFlipped)}
                  className="card-back text-white"
                  style={{ backgroundImage: `url(${event.urlImage})` }}
                >
                  <div className="text-center gap-2 flex justify-between items-center m-4">
                    <p className="text-md -tracking-tight text-white font-bold">{formatDate(event.date)}</p> 
                  </div>
                  <div className="mt-12 text-lg font-bold uppercase text-center">
                    <h3 className="">{event.title}</h3>
                  </div>
                  <div className=" m-4 text-md font-light">
                    <p className="descripction">{event.description}</p>
                  </div>
                  <div className="flex justify-between m-4 text-md">
                    <p>{event.time}hs</p>
                    <p className="capitalize" style={{ color: event.price === 0 ? 'inherit' : '' }}>
                      {event.price === 0 ? 'Gratis' : `${event.price} €`}
                    </p>
                  </div>
                  <div className="text-center gap-2 flex justify-center items-center m-4">
                    <Icon className="text-xl" icon="gis:location-poi" color="red" />
                    <p className="ubication text-md -tracking-tight">{event.ubication}</p>
                  </div>
                  <div className="flex justify-between items-center m-8 text-lg">
                    <button>
                      <Icon icon="ic:baseline-facebook" color="white" />
                    </button>
                    <button>
                      <Icon icon="mdi:twitter" color="white" />
                    </button>
                    <button>
                      <Icon icon="mdi:instagram" color="white" />
                    </button>
                    <button>
                      <Icon icon="ic:baseline-whatsapp" color="white" />
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}