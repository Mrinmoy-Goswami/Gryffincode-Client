import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../Constants/url";
import Navbar from "../../Components/Navbar";
import LoaderModal from "../../Components/Loader";
import HouseDetailCard from "./Components/HouseDetailCard";
import Auth from "../../Components/Auth";


const HouseRanking= () => {
  const [loading, setLoading] = useState(true);
  const[houseDetails,setHouseDetails] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/stats/houseDetails`);
        // setProblems(response.data);
        setHouseDetails(response.data)
        console.log(response.data)
        setLoading(false)
        
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <LoaderModal />
      ) : (
        <>
          <div className="w-screen h-screen  background fixed top-0  z-[-1]  m-0 p-0"></div>

          <div className="w-screen h-screen  ">
            <Navbar />
            <div className="w-full flex flex-row h-3/4 justify-center mt-10">
             <HouseDetailCard data={houseDetails.filter((item)=>item._id != null)}/>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Auth(HouseRanking);
