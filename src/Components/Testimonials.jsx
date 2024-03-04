import React from 'react'
import mg from "../assets/mg.jpg"
import "./Styles.css"

const Testimonials = ({image,name,designation,message}) => {
  return (
    <div className='w-1/4  border-white text-white h-full  rounded-xl  p-2 shadow-green-500 shadow-lg blur-back overflow-y-auto mr-10'>
      <span className='flex flex-row justify-end p-2 mt-0 items-center'>
        <img  src={image} alt='image' className='h-20 w-20 object-cover rounded-full m-2'/>
        <span>
        <p className='m-2 font-potter'>{name}</p>
        <p className='m-2 font-potter'>{designation}</p>
        </span>
      </span>
      <p className='m-2 p-2 font-quote text-[1.5rem]'>
        {message}   
        
      </p>
    </div>
  )
}

export default Testimonials
