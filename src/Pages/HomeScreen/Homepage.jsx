import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import FeatureCard from "../../Components/FeatureCard";
import { roadmaps } from "../../Constants/roadmaps.js";
import Lottie from "lottie-react";
import glow from "../../assets/Glow.json";
import Footer from "../../Components/Footer.jsx";
import Testimonials from "../../Components/Testimonials.jsx";
import {testimonials} from "../../Constants/testimonials.js";
import { Link } from "react-router-dom";
import LoaderModal from "../../Components/Loader.jsx";


const Homepage = () => {

  const[loading,setLoading] = useState(true)
function load(){
  setTimeout(()=>setLoading(false),3000)
}
load();

  return (
  

  <>
        <div className="w-screen h-screen  background fixed top-0  z-[-1]  m-0 p-0"></div>
      <div className="h-screen w-screen  overflow-y-auto overflow-x-hidden">
        <Navbar />
        
        <div className="w-screen 2xl:h-full ">
          <Hero />
          <span className="flex justify-center glow">
            <Lottie
              animationData={glow}
              style={{ height: "150px", width: "150px" }}
              />
          </span>
        </div>
        <div className="text-white text-center mt-5  mb-10">
          <p className="font-hero text-[#c39a1c] text-[40px] font-semibold p-4 m-4">
            Unveil Your Wizardry, Chart Your Coding Journey with Enchanted
            Roadmaps!
          </p>
        </div>
        <div className="mb-10 flex flex-row justify-center">
          {roadmaps.map((item) => (
            
            <FeatureCard
            image={item.image}
              name={item.name}
              shadowColor={item.color}
              link={item.link}
              />
              
              ))}
        </div>
       
        <div className="w-screen h-[20rem] flex flex-col mt-10 ">
          <p className="font-hero text-[#c39a1c] text-center text-[40px] font-semibold p-4 m-4">
            Wand-erful Platform
          </p>
          <div className="w-full h-full justify-evenly  flex flex-row m-10">
            {
              testimonials.map((item)=><Testimonials image={item.image} name={item.name} designation={item.designation} message={item.message} />)
            }
            
          </div>
        </div>
        <div className="h-[19rem]">

        </div>
        <Footer />
      </div>
   
    
    </>
  );
};

export default Homepage;
