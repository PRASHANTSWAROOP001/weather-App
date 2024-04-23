import React from 'react'

function Searchbar() {
  return (
    <div className='w-full flex  justify-between  items-center   h-20 '>
           <div className='flex items-center'>
            <h1 className='text-2xl ml-2'>Weather  App</h1>
           </div>
           <div className='flex items-center'>
            <input type="text" name="searchBar" id="search" placeholder='Lucknow' className='  w-60 rounded-lg text-gray-800 text-xl py-2 px-2 mx-2' />
            <button type="button" className='px-3 py-2 bg-gray-500 border-2 border-white hover:border-green-300 rounded-lg hover:bg-gray-400'>Search</button>
           </div>

           <div>
            <button className='px-4 py-2 bg-gray-500 border-2 border-white rounded-xl hover:bg-gray-400 mr-2'>Current Location</button>
           </div>
        </div>
  )
}

export default Searchbar