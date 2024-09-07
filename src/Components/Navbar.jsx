import React, { useState } from "react";
import nav from "../Constants/nav";
import logo from "../assets/logo.jpeg";
import "./Styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [isPlaying,setIsPlaying] = useState(false);
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("id");

    navigate("/");

  };
  function toggleMusic() {
      setIsPlaying(!isPlaying);
    }
  return (
    <nav className="w-full h-1/10 m-0 p-0 shadow-emerald-400 shadow-xl flex flex-row ">
      {
        isPlaying ?
        <audio loop autoPlay>
        <source src="src\assets\Theme.m4a" type="audio/mp4" />
   
      </audio>
      :
      <></>
      }
      <ul className="flex flex-row w-full text-white font-potter text-xl">
        <img className="h-14 w-14 m-2 logo rounded-full" src={logo} />
        {nav.map((item, index) => (
          <Link to={`/${item.link}`} key={index}>
            <li
              key={index}
              className="my-5 px-5 mx-5 hover:text-[#c39a1c] cursor-pointer hover:scale-110 delay-100 duration-100  text-sm xl:text-lg"
            >
              {item.tab}
            </li>
          </Link>
        ))}
      </ul>
      <span className="text-white w-1/4  font-hero font-bold flex justify-center items-center text-[0.5rem] xl:text-lg">
        {user.username},{user.house}
      </span>
      <span>
        <button
          className="shadow-sm shadow-emerald-400 p-2 m-4 text-white font-potter hover:text-black hover:bg-white text-xs" title="play theme"
         onClick={toggleMusic}
        >
          {isPlaying ? "Stop" :"Hedwig's"}
        </button>
      </span>
      <span>
        <button
          className="shadow-sm shadow-emerald-400 p-2 m-4 text-white font-potter hover:text-black hover:bg-white"
          onClick={logOut}
        >
          Logout
        </button>
      </span>
    </nav>
  );
};

export default Navbar;
