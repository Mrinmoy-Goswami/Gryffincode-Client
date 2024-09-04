import React, { useEffect } from 'react'
import CodeEditor from './components/Editor'
import { useLocation,useParams } from 'react-router-dom'
import axios from 'axios'
import { url } from '../../Constants/url'
import Auth from '../../Components/Auth'
const CodingScreen = () => {
 
  const location = useLocation()
  // console.log(location)
  const {data} = location.state

  console.log(data)


  
  return (
    <>
    <div className="w-screen h-screen  background fixed top-0  z-[-1]  m-0 p-0"></div>
    <div className='w-screen h-screen'>
      <CodeEditor problemId={data._id} problemDescription={data.description} title={data.title}
      difficulty={data.difficulty} exampleInput={data.exampleInput} exampleOutput={data.exampleOutput }  testCases={data.testCases}
      />
    </div>
    </>
  )
}

export default CodingScreen
