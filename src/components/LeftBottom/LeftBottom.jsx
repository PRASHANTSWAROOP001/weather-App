import React from 'react'
import ForecastDivs from '../ForecastDivs/ForecastDivs'

function LeftBottom({value}) {
  const displayForecastData =(value)=>{
    return (
      <ul className='flex flex-col  w-full h-full'>
        {value.map((data,index)=>(
          <li key={index}>
           <ForecastDivs data={data}/>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <div className=' w-72  h-96  rounded-xl  bg-gray-800 '>
      {displayForecastData(value)}
      </div>
  )
}

export default LeftBottom