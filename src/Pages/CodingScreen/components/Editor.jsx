import { useEffect, useRef, useState } from "react";

import { Editor } from "@monaco-editor/react";
// import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import axios from "axios";
import { url } from "../../../Constants/url";

const CodeEditor = ({problemId,problemDescription,title,housepoints,exampleInput,exampleOutput,testCases}) => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const[isSolved,setIsSolved] = useState(false);
  // const testCases = ['test1','test2']
  // const cases = [exampleInput,...testCases]

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  // UseEffect for checking if the question is already solved by the user 
  useEffect(() => {
    async function ifSolved() {
      try {
        const userId = localStorage.getItem('id');
        console.log(JSON.parse(userId))
        const response = await axios.post(`${url}/auth/userQuests`, {
          userId: JSON.parse(userId) // Sending userId in the request body
        });
        console.log(response.data);
        if (response.data.solvedProblems.includes(problemId)) {
          setIsSolved(true);
          // console.log("Already solved");
          localStorage.removeItem('user');
          localStorage.setItem('user',JSON.stringify(response.data))

        }
      } catch (error) {
        console.error("Error occurred while checking if problem is solved:", error);
      }
      
    }
    ifSolved();
  }, []);
  
 
  return (
    <div className="container flex flex-row w-screen ">  {/* Main container */}
    
      <div className="w-1/2 text-white m-3 p-3  ">
        <span className="w-full flex justify-center text-xl font-hero font-bold text-[#c39a1c]">

        {title}
        </span>
        {
          isSolved?
          <span className="w-full rounded-full  flex justify-center text-sm font-potter  text-[#c39a1c]">

        Solved ✅
        </span>
        :<></>
        }

        <div className=" h-1/2 bg-gray-200 m-10 bg-opacity-20 backdrop-blur-xs p-4 font-potter overflow-x-auto shadow-green-500 shadow-md rounded">
         {problemDescription}
         <p>
          <br></br>
         Note : For the current version of Gryffincode, all the inputs are in string format be it an Array or Map etc. Write your solution accordingly . Also do not change the nameof the function or the parameter, just write the logic inside the function
         </p>
        </div>
        <div className=" bg-gray-200 m-10 bg-opacity-20 backdrop-blur-xs p-4 font-potter shadow-green-500 shadow-md rounded">
         <p>Example Input : </p>
         <p>{exampleInput}</p>
         <p>Example Output : </p>
         <p> {exampleOutput}</p>

        </div>
      </div>
      
      <div className="flex flex-col  w-1/2"> {/* Editor and output sections */}
        <div className="editor w-full h-2/3 mr-4 overflow-auto bg-gray-100 p-4 rounded shadow-md m-4"> {/* Editor section */}
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="calc(100vh - 100px)" 
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </div>
        <Output  questionId={problemId}  editorRef={editorRef} language={language}  
        exampleOutput={exampleOutput} exampleInput={exampleInput} housePoints = {housepoints}
        /> {/* Output section */}
      </div>
    </div>
  );
};

export default CodeEditor;
