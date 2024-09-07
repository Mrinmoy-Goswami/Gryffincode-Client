import React, { useEffect, useState } from "react";
import Homepage from "./Pages/HomeScreen/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Problempage from "./Pages/ProblemsPage/Problempage";
import SignupForm from "./Pages/Signup/Signup";
import LoginForm from "./Pages/Signup/Login";
import CodingScreen from "./Pages/CodingScreen/CodingScreen";
import Sorting from "./Pages/SortingCeremony/Sorting";
import AboutUs from "./Pages/AboutScreen/AboutUs";
import ContactPage from "./Pages/Contactpage/Contactpage";
import HouseRanking from "./Pages/HouseRankings/HouseRanking";

const App = () => {

  const[user,setUser] = useState(null)
  useEffect(()=>{
    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (storedUserDetails) {
      
      setUser(storedUserDetails);
  }
},[user])

  return (
    <Router>
      <Routes>
        <Route path="/" element={user?<Homepage />:<LoginForm/>} />
        <Route path = '/frontend' element = {<Problempage/>}/>
        <Route path = '/login' element = {<LoginForm/>}/>
        <Route path = '/Home' element ={<Homepage/>}/>
        <Route path = '/quests' element = {<Problempage/>}/>
        <Route path = '/Coding' element = {<CodingScreen/>}/>
        <Route path = '/sorting' element = {<Sorting/>}/>
        <Route path = '/signup' element = {<SignupForm/>}/>
        <Route path = '/about' element = {<AboutUs/>}/>
        <Route path = '/contact' element = {<ContactPage/>}/>
        <Route path = '/houseRanking' element = {<HouseRanking/>}/>

      </Routes> 
    </Router>
  );
};

export default App;
