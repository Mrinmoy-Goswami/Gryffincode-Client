import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'


const HouseDetailCard = ({data}) => {
const[stats,setStats] = useState(data)
const[selectedHouse,setSelectedHouse] = useState('')

const handleHouse = (house)=>{
 selectedHouse == house ? setSelectedHouse(''):setSelectedHouse(house)
}

useEffect(()=>{
    setStats([...data].sort((a, b) => b.totalHousePoints - a.totalHousePoints));
},[data])

  return (
    <div className='w-1/2 h-3/4 bg-gray-200 m-10 rounded  shadow-red-500 shadow-lg bg-opacity-20 backdrop-blur-xs overflow-y-auto overflow-x-hidden text-[#FED918] font-potter'>
      
      
       
    <h2 className='text-center m-4'>House Rankings</h2>
    {
        stats.map((item,index)=>(
            <>
            <span key={index} onClick={()=>handleHouse(item._id)}  className='flex flex-row w-full justify-between 
             rounded my-0 p-4 cursor-pointer h-20 shadow-sm shadow-black  w-full hover:scale-95 
             ease-in-out duration-500  hover-shadow-xs hover:shadow-emerald-500 '>
                <h2>{item._id}</h2>
                <h2>{item.totalHousePoints}</h2>
            </span>
             {selectedHouse == item._id && item.users.sort((a,b)=>b.points - a.points).map((user,index)=>(
                    <div key={index} className='flex flex-col items-end m-2'>

                 <span className='flex flex-row justify-between shadow-sm shadow-indigo-400 rounded my-0 ml-3 p-3 w-4/5  border-[0.5px] border-black' key={index}>
                    <h2>{user.username}</h2>
                    <h2>{user.points}</h2>
                </span>
                    </div>
             ))}
                </>
        ))
    }
   
  </div>
  )

}
HouseDetailCard.propTypes = {
    data: PropTypes.array
  };
  



export default HouseDetailCard
