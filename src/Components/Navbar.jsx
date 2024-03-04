import React from 'react'
import nav from "../Constants/nav"
import logo from "../assets/logo.jpeg"
import "./Styles.css"

const Navbar = () => {
  return (
    <nav className='w-full h-1/10 m-0 p-0 shadow-emerald-400 shadow-xl   '>
      <ul className='flex flex-row w-full text-white font-potter text-xl'>
        <img className='h-14 w-14 m-2 logo rounded-full' src={logo} />
{
  nav.map((item,index)=> <li key={index}  className='my-5 px-5 mx-5 hover:text-[#c39a1c] cursor-pointer hover:scale-110 delay-100 duration-100'>{item.tab}</li>)
}
     
      </ul>
    </nav>
  )
}

export default Navbar
