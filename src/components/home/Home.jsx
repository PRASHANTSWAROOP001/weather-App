import React, { useEffect, useState } from 'react'
import LeftCard from '../leftCard/LeftCard';
import {format} from "date-fns"
import RightTop from '../rightTop/RightTop';
import { FaArrowCircleRight } from "react-icons/fa";
import TodaysWeather from '../todaysWeather/TodaysWeather';
import LeftBottom from '../LeftBottom/LeftBottom';


function Home() {
    const [city,setCity] = useState(" ") // stores the city and sets the city
    const [currWeather, setWeather] = useState(null) // used to fetch the data 
    const [forecast,setForecast] = useState(null)  
    const [forecastPoints, setForecastPoints] = useState([])//done
    const [sixHourData,setSixHourData] = useState([])
    const [currFormatData,setCurrFormatData] = useState({}) 

    const key = "94e90c2b14614d86be7125225241104"

    const getCurrentWeather =(city) =>{
      fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`)
      .then((res)=>(res.json()))
      .then((res)=>setWeather(res))
      .catch((error)=>{
        console.log("Error is: ",error);
      })

      getForecast(city,7);

    }

    const getForecast = (city,days=4) =>{
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${days}&aqi=no&alerts=no`)
      .then((res)=>(res.json()))
      .then((res)=> setForecast(res))
      .catch((error)=>(console.log("Error while fetching the forecast: ",error)))
    }



    function getTodaysForecast(){
      const today = new Date()
      const formatDateNow = format(today,"yyyy-MM-dd HH:mm")
      const sixHour = new Date(today.getTime()+6*60*60*1000)
      const formatData6 = format(sixHour,"yyyy-MM-dd HH:mm")
      let sixDataPoints =[]
      if(forecast != null){
        // const forecastData = forecast.forecast.forecastday[0]

         sixDataPoints = forecast.forecast.forecastday[0].hour.filter((element)=>{
          return element.time >= formatDateNow && element.time<formatData6;
        })
        
      }
      setSixHourData((prev)=>[...sixDataPoints])
      return sixDataPoints;
    }


    const addWeatherData = ()=>{
      if(forecast != null){
        for(let i=1; i<=6; i++){
           const {
            date,
            day:{maxtemp_c,mintemp_c,avgtemp_c,avghumidity,condition},
            uv,
            astro:{sunrise,sunset}

           } = forecast.forecast.forecastday[i];
           const{text,icon}= condition

           const newObj = {
            date,
            maxtemp_c,
            mintemp_c,
            avgtemp_c,
            avghumidity,
            text,
            icon,
            sunrise,
            sunset,
            uv
          }
  
          if (!forecastPoints.some(point => point.date === newObj.date)) {
            setForecastPoints(prevPoints => [...prevPoints, newObj]);
          }
        } 

      }
    }

    const formatCurrData = ()=>{
      if(currWeather != null){
        let data;
        const{
          
          location: {name,country,region,localtime},
          current:{temp_c,condition,humidity,feelslike_c,vis_km,uv,wind_kph,precip_mm,wind_dir,pressure_mb},

        }= currWeather

        const {text,icon} = condition

        data ={
          name,
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
          icon,
          wind_dir,
          pressure_mb,
        }

        setCurrFormatData(data)
      }
    }

    useEffect(()=>{

      addWeatherData()
      getTodaysForecast()
      formatCurrData()

    },[forecast])

    const displayTodaysData = (sixHourData)=>{
          return(
            <ul className=' flex flex-row w-full h-full items-center justify-around'>
              {sixHourData.map((item,index)=>(
                <li  key={index}>
                  <TodaysWeather value={item}/>
                </li>
              ))}
            </ul>
          )

    }

    if(forecast != null){
      console.log(forecastPoints);
      console.log("below is 6 hours Data");
      console.log(sixHourData);
      console.log("formatted current weather data");
      console.log(currFormatData);
    }
    


  return (
    <div className="w-full h-fit bg-black text-white">
      <div className='w-full flex justify-between  items-center h-20 '>
           <div className='flex items-center'>
            <h1 className='text-2xl ml-2'>Weather  App</h1>
           </div>
           <div className='flex items-center'>
            <input value={city} onKeyDownCapture={(e)=>{if(e.key === "Enter" && e.target.value.length >3){getCurrentWeather(city)}}}  onChange={(e)=>(setCity(e.target.value))} type="text" name="searchBar" id="search" placeholder='Lucknow' className='  w-60 rounded-lg text-gray-800 text-xl py-2 px-2 mx-2' />
            <button type="button" className='px-3 py-2 bg-gray-500 border-2 border-white hover:border-green-300 rounded-lg hover:bg-gray-400'  onClick={()=>getCurrentWeather(city)}>Search</button>
           </div>

           <div>
            <button className='px-4 py-2 bg-gray-500 border-2 border-white rounded-xl hover:bg-gray-400 mr-2'>Current Location</button>
           </div>
        </div>

        {forecast != null ?(
              <div className="flex">
              <div className="w-1/4 h-svh flex flex-col items-center justify-around ">
                { currFormatData != null &&(<LeftCard value={currFormatData}></LeftCard>)}
                <div>
                  <h1 className="text-2xl text-left">5 days forecast</h1>
                </div>
                { forecastPoints !=  null && (<LeftBottom value={forecastPoints}/>)}
              </div>
      
              <div className=" w-3/4 h-svh  flex flex-col  overflow-hidden items-center justify-around">
                <div className=" w-4/5 h-3/5 border-2 rounded-3xl  bg-gray-900">
                  <div className='mx-2 my-4 flex items-center gap-1 '>
                    <h1 className='text-xl font-semibold px-2'>Todays Highlight</h1>
                    <FaArrowCircleRight  className='w-6 h-6'/>
                    </div>
                  { currFormatData != null &&(<RightTop value ={currFormatData}/>)}
                </div>
                <div className="w-4/5  h-1/3 border-2 rounded-3xl overflow-hidden  bg-gray-900">
                  <div className='flex items-center gap-2 py-2 px-4 '>
                    <h1 className='font-semibold text-xl'>Todays weather </h1>
                    <FaArrowCircleRight className=' w-6 h-6'/>
                  </div>

                  <div className=' w-full h-4/5'>
                    {displayTodaysData(sixHourData)}
                  </div>
                </div>
              </div>
            </div>
        ):" "}


  
    </div>
  );
}

export default Home