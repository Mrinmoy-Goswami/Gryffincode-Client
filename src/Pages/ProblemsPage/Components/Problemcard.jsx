import React, { useState } from 'react'
import { url } from '../../../Constants/url'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Problemcard = ({difficulty,title,number,id}) => {

 
  const navigate = useNavigate();
  const handleClick = async()=>{
    const response  = await axios.get(`${url}/problem/${id}`)
    console.log(response.data)
    const data = response.data
    // setQuestionData(response.data)
   navigate(`/Coding`,{state:{data}})
  }
 
  return (
    <div className='cursor-pointer h-20 shadow-sm shadow-black  w-full hover:scale-95 ease-in-out duration-500 mr-4 p-4 hover-shadow-xs hover:shadow-emerald-500 '
    onClick={handleClick}
    >
      <span className='flex  text-[#FED918] font-potter   flex-row w-full justify-between '>
        <h2 className='text-lg font-hero'>
           {number} . {title}
        </h2>
        <h2>    
            Difficulty : {difficulty}
        </h2>
      </span>
    </div>
  )
}

export default Problemcard
