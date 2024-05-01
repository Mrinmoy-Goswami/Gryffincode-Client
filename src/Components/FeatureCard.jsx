import React, { useState } from 'react'
import "./Styles.css"
import { Link } from 'react-router-dom';


const FeatureCard = ({image,name,link}) => {
const[show,setShow] = useState(false);

const handlemouseLeave = ()=>{
  setShow(false);
}
const handlemouseEnter = ()=>{
  setShow(true);
}

  return (
    <div className={`m-5 flex  w-1/6 justify-center 2xl:h-[15rem] xl:h-[10rem] h-[13rem]  overflow-hidden shadow-2xl 
    shadow-red-600 rounded-full cursor-pointer `}
    id="floating"
    onMouseEnter={handlemouseEnter}
    onMouseLeave={handlemouseLeave}
    >
      {show?
       <>
       <Link to={link}>
       <img src={image} className='brightness-[30%] absolute z-[-2]'/>
       <span className='flex flex-col w-full h-full justify-center items-center font-hero text-[30px] text-center text-white '>
      {name}
       </span>

       </Link>
       </>:
       <img  src={image} className='z-[-1]'/>

       
      }
    </div>
  )
}

export default FeatureCard
