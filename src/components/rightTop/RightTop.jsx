import React from 'react'
import { WiHumidity } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";
import { TbUvIndex } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { TfiDirection } from "react-icons/tfi";
import { WiBarometer } from "react-icons/wi";


function RightTop({value}) {
  const {text,vis_km,humidity,feelslike_c,uv,wind_kph,wind_dir,pressure_mb} = value
  return (
    <div className="  w-full h-4/5 ">
      <div className="w-full h-full flex flex-col " id="column">
        <div
          className="w-full h-1/2 flex gap-2 justify-around items-center"
          id="rowone"
        >
          <div className=" w-48 h-3/4 border-2 rounded-lg flex flex-col  items-center">
            <div className=" justify-self-start">
              <h1 className=" text-md text-center py-1 font-medium">
                Weather Condition
              </h1>
            </div>

            <div className=" py-6">
              <h1 className=" text-lg font-semibold text-center">{text}</h1>
            </div>
          </div>
          <div className="w-48 h-3/4 border-2 flex flex-col items-center rounded-lg ">
            <div className=" justify-self-start">
              <h1 className=" text-md text-center py-1 font-medium">
                Feels Like
              </h1>
            </div>

            <div className="flex items-center gap-1 py-6">
              <CiTempHigh className=" w-10 h-10" />{" "}
              <h1 className="text-2xl">{feelslike_c} °C</h1>
            </div>
          </div>

          <div className=" w-48 h-3/4 border-2 rounded-lg  flex flex-col justify-between gap-2 items-center">
            <div className=" justify-self-start">
              <h1 className=" text-md text-center py-1 font-medium">
                Humidity
              </h1>
            </div>

            <div className=" flex items-center gap-1 py-6">
              <WiHumidity className=" w-10 h-10" />{" "}
              <h1 className="text-2xl">{humidity} %</h1>
            </div>
          </div>

          <div className="w-48 h-3/4 border-2 rounded-lg flex flex-col items-center">
            <div className=" justify-self-start">
              <h1 className=" text-md text-center py-1 font-medium">
                Visibility
              </h1>
            </div>

            <div className=" flex items-center gap-1 py-6">
              <GiPathDistance className=" w-8 h-10" />{" "}
              <h1 className=" px-1 text-2xl">{vis_km} Km</h1>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2   justify-around items-center flex gap-2" id="rowtwo">

        <div className="w-48 h-3/4 border-2 rounded-lg flex flex-col items-center">
            <div className=" justify-self-start">
              <h1 className=" text-md text-center py-1 font-medium">
                Uv
              </h1>
            </div>

            <div className=" flex items-center gap-1 py-6">
              <TbUvIndex className=" w-8 h-10" />{" "}
              <h1 className=" px-1 text-2xl">{uv}</h1>
            </div>
          </div>


          <div className="w-48 h-3/4 border-2 rounded-lg flex flex-col items-center">
            <div className=" justify-self-start">
              <h1 className=" text-md text-center py-1 font-medium">
                Wind Speed
              </h1>
            </div>

            <div className=" flex items-center gap-1 py-6">
              <GiWindmill className=" w-8 h-10" />{" "}
              <h1 className=" px-1 text-2xl">{wind_kph} Kph</h1>
            </div>
          </div>

          <div className="w-48 h-3/4 border-2 rounded-lg flex flex-col items-center">
            <div className=" justify-self-start">
              <h1 className=" text-md text-center py-1 font-medium">
                Wind Direction
              </h1>
            </div>

            <div className=" flex items-center gap-1 py-6">
              <TfiDirection className=" w-8 h-10" />{" "}
              <h1 className=" px-1 text-2xl">{wind_dir}</h1>
            </div>
          </div>


          <div className="w-48 h-3/4 border-2 rounded-lg flex flex-col items-center">
            <div className=" justify-self-start">
              <h1 className=" text-md text-center py-1 font-medium">
                Pressure
              </h1>
            </div>

            <div className=" flex items-center gap-1 py-6">
              <WiBarometer className=" w-8 h-10" />{" "}
              <h1 className=" px-1 text-2xl">{pressure_mb} </h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RightTop