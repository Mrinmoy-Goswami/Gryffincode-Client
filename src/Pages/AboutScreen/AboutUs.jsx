import React from "react";
import Navbar from "../../Components/Navbar";

const AboutUs = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden background fixed top-0  z-[-1]  m-0 p-0"></div>

      <div className="h-screen w-screen  overflow-y-auto overflow-x-hidden ">
        <Navbar />
        <div className="w-full h-full flex items-center justify-center">

      
        <div className="text-[#c39a1c] text-center w-3/4 h-full flex-col justify-between  mt-10 p-5 tracking-wider">
          <span
            className="font-hero text-[30px] font-bold shadow-lg shadow-red-400 p-2 rounded 
    mb-5"
          >
            About us
          </span>
          <br></br>
          <p className=" font-potter mt-10 text-[20px]">
            Welcome to GryffinCode, where the magic of coding meets the
            enchantment of the Harry Potter universe! We are a team of
            final-year students from Lovely Professional University, deeply
            passionate about both the wizarding world and the wonders of science
            and technology. Our capstone project, GryffinCode, is our
            spellbinding effort to make coding as thrilling as a Quidditch match
            and as rewarding as earning House Points.
            <br></br>
          </p>

          <br></br>
          <span
            className="font-hero text-[30px] font-bold shadow-lg shadow-green-400 p-2 rounded 
    mb-5"
          >
            Our Mission
            <br></br>
          </span>
          <p className="font-potter text-[1.2rem] mt-10">
            At GryffinCode, our mission is to blend the excitement of the Harry
            Potter series with the intellectual challenge of coding. We strive
            to create an engaging platform where learning to code is an
            adventure, and every achievement is celebrated with the same
            enthusiasm as winning the House Cup. Our goal is to foster a
            community of coders who are as passionate about their craft as they
            are about their favorite wizarding house.
            <br></br>
          </p>
          <p className="font-bold font-hero mt-4">Features of GryffinCode</p>

          <p className="font-bold font-hero my-2">House Assignment :</p>
          <p className="font-potter">
            Upon signing in, every user is magically sorted into one of the four
            iconic houses—Gryffindor, Hufflepuff, Ravenclaw, or Slytherin. Just
            like in Hogwarts, your house will be your family as you embark on
            your coding journey.
          </p>
          <p className="font-bold font-hero my-2">Pathways of Magic:</p>
          <p className="font-potter">
            Choose your path based on your interests and career goals. Whether
            you are enchanted by the art of Frontend development, the mysterious
            world of Machine Learning, the analytical depth of Data Science, or
            any other pathway, GryffinCode offers a curriculum designed to make
            you a master in your chosen field.
          </p>
          <p className="font-bold font-hero my-2">House Points:</p>
          <p className="font-potter">
            Every spell (or code) you cast correctly earns you House Points.
            These points contribute to your house's overall standing and help
            you rise through the ranks, from a first-year coder to a Grand
            Sorcerer of Software.
          </p>
          <p className="font-bold font-hero my-2">Titles and Promotions:</p>
          <p className="font-potter">
            Titles and Promotions: As you accumulate House Points, you will be
            promoted to different titles within your house. Show your prowess
            and climb the ranks to earn the title of Head Boy/Girl, Prefect, or
            even the ultimate Grand Sorcerer of Software.
           
          </p>
          <br></br> <br></br> <br></br> <br></br>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutUs;
