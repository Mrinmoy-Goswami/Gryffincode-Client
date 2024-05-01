import React from "react";
import nav from "../Constants/nav";
import logo from "../assets/logo.jpeg";
import "./Styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <nav className="w-full h-1/10 m-0 p-0 shadow-emerald-400 shadow-xl flex flex-row">
      <ul className="flex flex-row w-full text-white font-potter text-xl">
        <img className="h-14 w-14 m-2 logo rounded-full" src={logo} />
        {nav.map((item, index) => (
          <Link to={`/${item.link}`} key={index}>
            <li
              key={index}
              className="my-5 px-5 mx-5 hover:text-[#c39a1c] cursor-pointer hover:scale-110 delay-100 duration-100"
            >
              {item.tab}
            </li>
          </Link>
        ))}
      </ul>
      <span className="text-white w-1/4 pt-4 font-hero font-bold">
        {user.username},{user.house}
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
