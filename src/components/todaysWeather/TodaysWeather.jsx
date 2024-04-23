import React from 'react'

function TodaysWeather({value}) {
       const{
        condition:{text,icon},
        time,
        temp_c,
       } = value
  return (
    <div className=' w-36 h-40 border-2 rounded-md'>
      <div>
        <h5 className=' py-1 text-center'>{time.slice(10,(time.length))}</h5>
      </div>
      <div className=' w-full flex justify-center items-center  h-1/2'>
        <img src={icon} alt="weather image" />
      </div>
      <div>
        <h5 className='text-center'>{temp_c} °C</h5>
      </div>
    </div>
  )
}

export default TodaysWeather