import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { GetPlaceDetails } from '@/service/GlobalApi';

function HotelCardItem({ hotel }) {
    const [photo, setPhoto] = useState(null);
  useEffect(()=>{
    hotel&&GetPlacePhoto();
  },[hotel])
  const GetPlacePhoto=async()=>{
    const data = {
      textQuery: `${hotel?.HotelName} hotel ${hotel?.["Hotel address"]}`,  // Fallback to a default value
      per_page: 1,
    };
    const result=await GetPlaceDetails(data).then(resp=>{
      setPhoto(resp.data.results[0])
    })
  }
  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel.HotelName +
        "," +
        hotel?.["Hotel address"]
      }
      target="_blank"
    >
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img src={photo?.urls?.raw} className="rounded-xl h-[180px] w-full object-cover" />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium">{hotel?.HotelName}</h2>
          <h2 className="text-xs text-gray-500">
            📍{hotel?.["Hotel address"]}
          </h2>
          <h2 className="text-sm">💰{hotel?.Price}</h2>
          <h2 className="text-sm">⭐{hotel?.rating}</h2>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
