import React from 'react'

function ForecastDivs({data}) {
    const{
     date,
     icon, 
     avgtemp_c,
    } = data
  return (
    <div className='w-full flex  justify-around items-center '>
      <div><h1>{date}</h1></div>
      <div><img src={icon} alt="weather condition Image" /></div>
      <div>{avgtemp_c} °C</div>
    </div>
  )
}

export default ForecastDivs