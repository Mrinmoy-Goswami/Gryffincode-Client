import React from "react";
import insta from "../assets/Instagram.jpg";
import linkedin from "../assets/Linkedin.jpg";
import Github from "../assets/Github.jpg";

const Footer = () => {
  return (
    <footer className="text-white font-potter py-6 shadow-inner shadow-emerald-500 h-60">
      <div className="mx-auto flex flex-col items-center h-full">
        <p className="text-lg font-semibold ">©Gryffincode 2024</p>
        <p className="text-sm mt-4">
          Designed and Developed by Wizards of Hogwarts
        </p>
        <div className="flex mt-4 space-x-4">
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact Us
          </a>
        </div>
        <div className="flex flex-row gap-4 m-4">
          <a href="https://www.instagram.com/go_mrin/" target="_blank">
            <img
              className="rounded-full h-14 w-14 cursor-pointer"
              src={insta}
            />
          </a>
          <a href="https://www.instagram.com/go_mrin/" target="_blank">
            <img
              className="rounded-full h-14 w-14 cursor-pointer"
              src={linkedin}
            />
          </a>
          <a href="https://www.instagram.com/go_mrin/" target="_blank">
            {" "}
            <img
              className="rounded-full h-14 w-14 cursor-pointer"
              src={Github}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
