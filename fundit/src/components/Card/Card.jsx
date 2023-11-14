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
        socialMedia: flyer.socialMedia || [] // Provide an empty array as a default value
      }));
      setFlyers(flyersWithDefaults);
    });
  }, []);

  const openSocialMedia = (url) => {
    window.open(url, '_blank');
  };

  const flipHandle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-wrap" >
      {flyers.map((flyer) => (
        <div key={flyer._id} className="card">
          <Icon onClick={flipHandle} className="flip-icon" icon="mi:switch" />
          <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
            <div
              className="card-front"
              style={{ backgroundImage: `url(${flyer.imageUrl})` }}
            >
              
            </div>


            <div
              className="card-back text-white"
              style={{ backgroundImage: `url(${flyer.imageUrl})` }}
            >
              <div className="m-12 text-xl font-bold uppercase text-center">
                <h3 className="">{flyer.title}</h3>
              </div>
              <div className="descripction m-8 text-center text-md font-light">
                <p>{flyer.description}</p>
              </div>
              <div className="flex justify-between m-4 text-lg">
                <p>{flyer.schedule}hs</p>
                <p className="capitalize"  style={{ color: flyer.price === 'gratis' ? 'text-green-500 font-bold' : 'inherit' }}>{flyer.price}</p>
              </div>
              <div className="text-center gap-2 flex justify-center items-center m-4">
              <Icon className="text-xl" icon="gis:location-poi" color="red" />
                <p className="location text-lg -tracking-tight">{flyer.location}</p>
              </div>
              <div className="flex justify-around items-center m-12 text-xl">
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
  );
}
