import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import loader from '../../assets/loader2.json'; 
import { Link, useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import axios from 'axios';
import { url } from '../../Constants/url';
import "./sorting.css"

const Sorting = () => {
  const[house,setHouse]  = useState('')
  const [enter,setEnter] = useState(true);

  const sortHouse = async () => {
    setTimeout(async() => {
      const num = Math.floor(Math.random() * 4) + 1;
      let house;
      if (num === 1) {
        house = "Gryffindor";
      } else if (num === 2) {
        house = "Slytherin";
      } else if (num === 3) {
        house = "Hufflepuff";
      } else {
        house = "Ravenclaw";
      }
      
      // Update the house state
      setHouse(house);
  
      try {
        const response = await axios.post(`${url}/auth/houseSorting`, {
          id: localStorage.getItem('id'),
          house: house
        });
        
        // Update localStorage 'user' item
        localStorage.setItem('user', JSON.stringify(response.data));
        setEnter(false)
       
      } catch (error) {
        console.log(error);
      }
    }, 17000);
  };
  

useEffect(()=>{
  sortHouse()

},[])
  return (
    <>
      <div className='absolute h-full w-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  background backdrop-blur z-[-1]'>

      </div>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
<div className='logo rounded-full mt-10'>
  
<Lottie animationData={loader} className='h-40 w-40' autoPlay/>
</div>
<span className='mt-5 font-10 w-1/2 h-1/3 font-potter '>
  
<TypeAnimation
      
      sequence={[
          // Same substring at the start will only be typed out once, initially
          '"Oh, you may not think Im pretty,\nBut dont judge on what you see,\nIll eat myself if you can find\nA smarter hat than me.\nYou can keep your bowlers black,\nYour top hats sleek and tall,\nFor Im the Hogwarts Sorting Hat\nAnd I can cap them all.\n\nTheres nothing hidden in your head\nThe Sorting Hat cant see,\nSo try me on and I will tell you\nWhere you ought to be.\n\nYou might belong in Gryffindor,\nWhere dwell the brave at heart,\nTheir daring, nerve, and chivalry\nSet Gryffindors apart;\n\nYou might belong in Hufflepuff,\nWhere they are just and loyal,\nThose patient Hufflepuffs are true\nAnd unafraid of toil;\n\nOr yet in wise old Ravenclaw,\nIf youve a ready mind,\nWhere those of wit and learning,\nWill always find their kind;\n\nOr perhaps in Slytherin\nYoull make your real friends,\nThose cunning folk use any means\nTo achieve their ends"',
          5000, 
          
        ]}
        wrapper="span"
        speed={120}
        style={{ fontSize: '0.5 rem' , color:"#c39a1c",marginBottom:"0px" }}
       
        />
  </span>
  <p className='text-[#c39a1c] font-hero'>Assigned House : </p>
  <span className="font-bold font-hero text-[#c39a1c] text-[50px] slide-in-top shadow-lg shadow-red-400  rounded-full p-4">
    <p className='house'>{house}</p>
  </span>
  <span>

  </span>
  <Link to={'/Home'}>
  <button
          className="shadow-sm shadow-emerald-400 p-2 m-4 text-white font-potter hover:text-black hover:bg-white m-3"
          disabled={enter}
          >
          Enter Hogwarts Library
        </button>
          </Link>
      </div>
    </>
  );
};

export default Sorting;
