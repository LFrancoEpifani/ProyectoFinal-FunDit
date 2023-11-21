import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { client } from "../../../../fundit-backend/.sanity/lib/client";
import FilterModal from "../FilterModal/FilterModal";
import { useTranslation } from 'react-i18next';



export async function getFlyers() {
  const query = `*[_type == "flyer"]{
    _id,
    title,
    description,
    price,
    location,
    schedule,
    "imageUrl": image.asset->url,
    socialMedia[]{
      platform,
      url
    }
  }`;

  const flyers = await client.fetch(query, { cache: "no-store" });
  return flyers;
}

export default function Card() {

  const { t , i18n} = useTranslation("global");

  const [flyers, setFlyers] = useState([]);

  const [isFlipped, setIsFlipped] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    getFlyers().then(flyersData => {
      const flyersWithDefaults = flyersData.map(flyer => ({
        ...flyer,
        socialMedia: flyer.socialMedia || []
      }));
      setFlyers(flyersWithDefaults);
    });
  }, []);

  const flipHandle = () => {
    setIsFlipped(!isFlipped);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return ( 
    <div className="text-center">
      <h2 className="calendar text-lg mt-8 mb-4 mx-8 border-gray-300">{t('events')}</h2>
      <div className="flex justify-center items-center gap-2">
        <input className="border-2 border-gray-300 h-9 px-2 pr-6 rounded-lg shadow-2xl" type="text" placeholder="Buscador..."/>
        <div className="border-2 border-gray-300 py-1 px-2 shadow-2xl text-black rounded-md">
          <button onClick={toggleModal} className="flex justify-center items-center gap-1">
            <p className="">{t()}</p>
            <Icon icon="mi:filter" />
          </button>
          {isModalOpen && (
            <FilterModal toggleModal={toggleModal}/>
      )}
        </div>
      </div>
    <div className="flex flex-wrap justify-center items-center" >
      {flyers.map((flyer) => (
        <div key={flyer._id} className="card"> 
          <Icon onClick={flipHandle} className="flip-icon" icon="mi:switch"/>
          <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
            <div
              className="card-front"
              style={{ backgroundImage: `url(${flyer.imageUrl})` }}
            > 
            <div className="bg-black absolute bottom-0 w-full p-3 flex justify-between items-center rounded-b-md">
              <h2 className="text-white font-bold uppercase text-start text-xl">{flyer.title}</h2>
              <div className="icons-bar flex gap-2 justify-center items-center">
                <Icon className="chat rounded-full bg-white w-7 h-7" icon="humbleicons:chat" />
                <Icon className="rounded-full bg-white w-7 h-7 p-1" icon="ion:ticket" />
              </div>
            </div>

            </div>
        

            <div
              className="card-back text-white"
              style={{ backgroundImage: `url(${flyer.imageUrl})` }}
            >
              <div className="mt-12 text-lg font-bold uppercase text-center">
                <h3 className="">{flyer.title}</h3>
              </div>
              <div className="descripction m-4 text-center text-md font-light">
                <p>{flyer.description}</p>
              </div>
              <div className="flex justify-between m-4 text-md">
                <p>{flyer.schedule}hs</p>
                  <p className="capitalize" style={{ color: flyer.price.toLowerCase() === 'gratis' ? '#16FF00' : 'inherit' }}>
                  {flyer.price}
                  </p>
                </div>
              <div className="text-center gap-2 flex justify-center items-center m-4">
              <Icon className="text-xl" icon="gis:location-poi" color="red" />
                <p className="location text-md -tracking-tight">{flyer.location}</p>
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
