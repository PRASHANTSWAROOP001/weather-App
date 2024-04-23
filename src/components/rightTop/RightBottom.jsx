import React from 'react'
import { TbUvIndex } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { TfiDirection } from "react-icons/tfi";

function RightBottom() {
  return (
    <div className='w-full h-full flex flex-row  items-center justify-around  '>
        <div className=' w-2/5 h-4/5 border-2 rounded-lg'>

          <div>
           <TbUvIndex /> <h1>{"Uv Index"}</h1>
          </div>
          <div>
           
          </div>
          <div>
           <TfiDirection /> <h1>{"Uv Index"}</h1>
          </div>
          
        </div>
        <div className=' w-2/5 h-4/5 border-2 rounded-lg'></div>
    </div>
  )
}

export default RightBottom