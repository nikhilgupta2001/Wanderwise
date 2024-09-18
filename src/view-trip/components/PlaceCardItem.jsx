import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { GetPlaceDetails } from '@/service/GlobalApi';

function PlaceCardItem({place}) {
  const [photo, setPhoto] = useState(null);
  useEffect(()=>{
    place&&GetPlacePhoto();
  },[place])
  const GetPlacePhoto=async()=>{
    const data = {
      textQuery: `${place?.placeName} ${place?.['Place Details']}`,  // Fallback to a default value
      per_page: 1,
    };
    const result=await GetPlaceDetails(data).then(resp=>{
      setPhoto(resp.data.results[0])
    })
  }
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place.placeName} target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
        <img src={photo?.urls?.raw}
        className='w-[130px] h-[130px] rounded-xl'/>
        <div>
            <h2 className='font-bold text-lg'>{place.placeName}</h2>
            <p class='text-sm text-gray-400'>{place?.['Place Details']}</p>
            <h2 className='mt-2'>{place?.['Time travel each of the location']}</h2>
        </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem