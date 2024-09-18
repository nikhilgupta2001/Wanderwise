import { Button } from '@/components/ui/button'
import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";
 
function InfoSection({trip}) {
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
    <div>
        <img src={photo?.urls?.raw ? photo.urls.raw : '/placeholder.jpg'} className='h-[340px] w-full object-cover rounded-xl'/>
        <div className='flex justify-between items-center'>
        <div className='my-5 flex flex-col gap-2'>
            <h2 className='font-bold text-2xl'>{trip?.userSelection?.location}</h2>
            <div className='flex gap-5'>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>📅{trip.userSelection?.noOfDays} Day</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🪙{trip.userSelection?.budget} Budget</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🥂 No . of Traveler: {trip.userSelection?.traveler} </h2>
            </div>
        </div>
        <Button><IoIosSend /></Button>
        </div>
    </div>
  )
}

export default InfoSection