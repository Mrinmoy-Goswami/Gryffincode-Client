import Navbar from "../../Components/Navbar";
import Problemcard from "./Components/Problemcard";
import ReportCard from "./Components/ReportCard";
import LoaderModal from "../../Components/Loader";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../Constants/url";

const Problempage = () => {
  const [loading, setLoading] = useState(true);
  const userDetails = JSON.parse(localStorage.getItem('user'));
  function load() {
    setTimeout(() => setLoading(false), 1000);
  }

  load();

  const [selectedProblem, setSelectedProblem] = useState("");
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/problem/allProblems`);
        setProblems(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error);
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
              <div className="w-2/4 h-3/4 bg-gray-200 m-10 rounded  shadow-green-500 shadow-lg bg-opacity-20 backdrop-blur-xs overflow-y-auto overflow-x-hidden">
                {problems.map((item, index) => (
                  <Problemcard
                  key={index}
                    title={item.title}
                    difficulty={item.difficulty}
                    number={index + 1}
                    id={item._id}
                   
                  />
                ))}
              </div>
              {selectedProblem ? (
                <></>
              ) : (
                <ReportCard
                  challenges={userDetails.solvedProblems.length}
                  house={userDetails.house}
                  housepoints={userDetails.housePoints}
                  title={userDetails.title}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Problempage;
