import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { url } from '../../Constants/url';
import axios from 'axios';
import LoaderModal from '../../Components/Loader';

function LoginForm() {
  const[loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(()=>{
    const loggedIn = localStorage.getItem('user');
    if(loggedIn){
      navigate('/Home')

    } 
  },[navigate])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    setLoading(true)
    e.preventDefault();
    try {
      
      const response = await axios.post(`${url}/auth/login`,{
        username : formData.username,
        email: formData.email,
        password: formData.password
      })
      
      if(response.data.house !== null){
        localStorage.setItem("user",JSON.stringify(response.data))
        console.log("House is there")
        setLoading(false)
        navigate('/Home')
      }
      else{
        localStorage.setItem('id',response.data._id)
        setLoading(false)
        navigate("/sorting")
      }
      setLoading(false)
    } catch (error) {
     console.log(error.response.data)
     alert("Merlin's beard, it appears a spell has gone awry!"
      + error.response.data
     )
     setLoading(false)

     navigate('/login')
    }
   
  };

  const handleSignup = ()=>{
    navigate('/signup')
  }

  return (
    <>
    {loading ? <LoaderModal/> :
    
    <>
   <div className='h-screen w-screen fixed inset-0 z-[0] background '></div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 z-[1]">
       
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg z-[1]">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold  font-hero text-[#c39a1c]">
            Welcome to Gryffincode
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border bg-gray-700 border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border bg-gray-700 border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-4"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border bg-gray-700 border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-4"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
              >
              Login
            </button>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
              onClick={handleSignup}
              >
              Signup
            </button>
          </div>
        </form>
      </div>
             
    </div>
      </>
      }
                </>
  );
}

export default LoginForm;
