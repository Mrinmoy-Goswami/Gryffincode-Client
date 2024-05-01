import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import loader from '../assets/wand.json'; // Import your Lottie animation JSON file
import './Styles.css'

const LoaderModal = () => {
  return (
    <>
      <div className='absolute h-full w-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  background backdrop-blur z-[-1]'>

      </div>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
<div className='logo rounded-full'>
  
<Lottie animationData={loader} className='h-40 w-40' autoPlay/>
</div>
<span className='mt-5'>
  <h1 className='font-potter text-[#c39a1c] text-xl '>Alohomora...</h1>
  </span>
      </div>
    </>
  );
};

export default LoaderModal;
