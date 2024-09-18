import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({trip}) {
    const [photo, setPhoto] = useState(null);
  useEffect(()=>{
      trip&&GetPlacePhoto();
  },[trip])
  const GetPlacePhoto=async()=>{
    const data = {
      textQuery: trip?.userSelection?.location || 'default location',  // Fallback to a default value
      per_page: 1,
    };
    const result=await GetPlaceDetails(data).then(resp=>{
      setPhoto(resp.data.results[0])
    })
  }
  return (
    <Link to={'/view-trip/'+trip.id}>
    <div className='hover:scale-105 transition-all '>
        <img src={photo?.urls?.raw ? photo.urls.raw : '/placeholder.jpg'} className="object-cover rounded-xl h-[220px]"/>
        <div>
               <h2 className='font-bold text-lg'>{trip?.userSelection?.location}</h2>
               <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget</h2>
        </div>
    </div>
    </Link>
    
  )
}

export default UserTripCardItem