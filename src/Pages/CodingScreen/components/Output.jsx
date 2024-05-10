import { useEffect, useState } from "react";
import { executeCode } from "../api";
import SubmitModal from "./SubmitModal";
import { url } from "../../../Constants/url";
import axios from "axios";

const Output = ({questionId, editorRef, language,testCases,housePoints,exampleOutput,exampleInput }) => {
  // console.log(String(exampleOutput))
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting,setIsSubmitting] = useState(false)
  const [isError, setIsError] = useState(false);
  const [isCorrect,setIsCorrect] = useState(false);


  // useEffect(()=>{
  //   if(output !== exampleOutput){
  //     setIsCorrect("red")
  //   }
  //   else{
  //     setIsCorrect("sky")
  //   }
  // },[output])

  const runCode = async () => {

    
    const sourceCode = editorRef.current.getValue() + `\nsolution(${JSON.stringify(exampleInput)})`;
    // console.log(exampleInput)
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      console.log(result.output)
      setOutput(result.output);
      isError ? setIsError(false) : setIsError(result.stderr); // Set error based on stderr
    } catch (error) {
      console.log(error);
      // Implement error handling (e.g., display toast notification)
    } finally {
      setIsLoading(false);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
     
      }
    }
  ;

 

  const submitCode = async()=>{
    if(isError){
      alert("please resolve all the errors before submitting")
    }
    else{

      const sourceCode = editorRef.current.getValue() + `\nsolution(${JSON.stringify(exampleInput)})`;
      console.log(exampleInput)
      if (!sourceCode) return;
      try {
        setIsSubmitting(true);
        const { run: result } = await executeCode(language, sourceCode);
        const outputLines = result.output.split("\n");
        setOutput(outputLines)
        const outputString = outputLines.join('');
        if(outputString == exampleOutput){
          setIsCorrect(true);
          await axios.post(`${url}/judge/submit`,{
            questionId : questionId,
            userId : localStorage.getItem('id'),
            housePoints : Number(housePoints)
          }).then((response)=>console.log(response.data))
        }
        else{
        
        }
      } catch (error) {
        console.log(error);
        
      } finally {
        setIsSubmitting(false);
        const { run: result } = await executeCode(language, sourceCode);
        setOutput(result.output.split("\n"));
        window.location.reload()
        
      }
    }
  }

  return (
    <>{
      isCorrect ? 
    <SubmitModal/>:<></>
    }
    <div className=" w-[90%] h-full mx-4 mr-5 p-3  bg-gray-900 rounded shadow-md shadow-emerald-500 "> {/* Main container */}
   
      <button
        className={`m-2 text-[#c39a1c] font-potter px-3 py-2 rounded-md focus:outline-none ${
          isLoading ? "bg-black hover:bg-gray-700" : "bg-black  hover:bg-gray-600 shadow-lg shadow-emerald-500"
        }`}
        disabled={isLoading}
        onClick={runCode}
        >
        {isLoading ? "Running..." : "Run Code"}
      </button>
      <button
        className={`m-2 text-[#c39a1c] font-potter px-3 py-2 rounded-md focus:outline-none ${
          isLoading ? "bg-black hover:bg-gray-700" : "bg-black  hover:bg-gray-600 shadow-lg shadow-emerald-500"
        }`}
        disabled={isSubmitting}
        onClick={submitCode}
        >
        {isSubmitting ? "Submitting..." : "Submit Code"}
      </button>
      <div
        className={`mr-5 pr-5 p-2 rounded-md shadow-md mt-4 text-white font-potter ${
          isError ? "border border-red-500 text-red-500" : "border border-emerald-500"
        } `}
        >
        <span className="flex flex-col">
         <p>Input : {exampleInput} </p>
         
         <p>Expected Output : {exampleOutput}</p>
        
        {/* {testCases.map((item)=><span>
          <p>{item}</p>
        </span>)} */}
        </span>

        { output ? (
          <p > Your ouput : {output}</p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
        </>
  );
};

export default Output;
