import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { client } from "../../../../fundit-backend/.sanity/lib/client";

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
  const [flyers, setFlyers] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);

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

  return ( 
    <div className="text-center m-4">
      <h2 className="calendar text-lg m-8 text-black">Calendario</h2>
    <div className="flex flex-wrap justify-center items-center" >
      {flyers.map((flyer) => (
        <div key={flyer._id} className="card">
          <Icon onClick={flipHandle} className="flip-icon" icon="mi:switch" />
          <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
            <div
              className="card-front"
              style={{ backgroundImage: `url(${flyer.imageUrl})` }}
            > 
            <div className="bg-black absolute bottom-0 w-full p-2 flex justify-between items-center rounded-b-lg">
              <h2 className="text-white font-bold uppercase">{flyer.title}</h2>
              <div className="flex gap-2">
                <Icon className="chat rounded-full bg-white w-6 h-6" icon="humbleicons:chat" />
                <Icon className="rounded-full bg-white w-6 h-6 p-1" icon="ion:ticket" />
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
