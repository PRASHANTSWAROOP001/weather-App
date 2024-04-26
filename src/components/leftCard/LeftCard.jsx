import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaArrowCircleDown } from "react-icons/fa";

function LeftCard({value}) {
    const{name,
      country,
      region,
      localtime,
      temp_c,
      precip_mm,
      humidity,
      feelslike_c,
      vis_km,
      uv,
      wind_kph,
      text,
      icon,}= value
  

  return (
    <div className=' w-72  h-80  rounded-xl  bg-gray-800 '>
      <div className='mx-2 my-2 flex items-center  '>
        <h1 className=' text-xl px-2'>Now</h1>
        <FaArrowCircleDown className='w-6 h-5'/>
      </div>

      <div className='w-full h-1/2  border-b-2 flex '>
        <div className='w-1/2 h-full flex justify-center items-center'>
          <h1 className='text-5xl px-2'>{temp_c}°C</h1>
        </div>
        <div className='w-1/2 h-full flex justify-center items-center'>
         <img src={icon} alt="weather image" />
        </div>
      </div>

      <div className='flex items-center my-2'>
        <IoCalendarNumberOutline className=' w-10 h-8 '/> <h1 className=' px-2 text-lg'>{localtime}</h1>
      </div>

      <div className='flex items-center my-2 '>
        <IoLocationOutline className=' w-10 h-8 '/> <h1 className='px-2 text-lg'>{name+" "+country}</h1>
      </div>
      
      </div>
  )
}

export default LeftCard