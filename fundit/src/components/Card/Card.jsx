import React from 'react';
import {Icon} from '@iconify/react'

import {client} from '../../../../fundit-backend/.sanity/lib/client'

export async function getFlyers() {
  const query = `*[_type == "flyer"]{
    title,
    description,
    price,
    location,
    schedule,
    "imageUrl": image.asset->url
  }`;

  const flyers = await client.fetch(query, {cache: "no-store" })
  return flyers;
}

export default function Card() {
  const [flyers, setFlyers] = React.useState([]);

  React.useEffect(() => {
    getFlyers().then(flyersData => {
      setFlyers(flyersData);
    });
  }, []);

  return (
    <div className='grid grid-cols-4 flipped-card-container'>
      {flyers.map(flyer => (
        <div key={flyer._id}>
            <h1>{flyer.title}</h1>
          <img className='myImage m-4' src={flyer.imageUrl} alt={flyer.title} />
          <p>{flyer.description}</p>
        </div>
        
      ))}
    </div>
  );
}

