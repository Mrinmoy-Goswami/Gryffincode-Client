import React from 'react'
import Problemcard from './Problemcard'

const ReportCard = ({challenges,house,housepoints,title}) => {
  return (
    
       <div className='w-1/4 h-3/4 bg-gray-200 m-10 rounded  shadow-green-500 shadow-lg bg-opacity-20 backdrop-blur-xs overflow-y-auto overflow-x-hidden text-[#FED918] font-potter'>
      
       
        <h2 className='text-center m-4'>Wizarding Report Card</h2>
        <span className='flex flex-row w-full justify-between mt-4 p-4'>
        <h2>Challenges Conquered</h2>
        <h2>{challenges}</h2>
        </span>
        <span className='flex flex-row w-full justify-between mt-4 p-4'>
        <h2>House</h2>
        <h2>{house}</h2>
        </span><span className='flex flex-row w-full justify-between mt-4 p-4'>
        <h2>House Points</h2>
        <h2>{housepoints}</h2>
        </span>
        <span className='flex flex-row w-full justify-between mt-4 p-4'>
        <h2>Title</h2>
        <h2>{title}</h2>
        </span>

      </div>
   
  )
}

export default ReportCard
