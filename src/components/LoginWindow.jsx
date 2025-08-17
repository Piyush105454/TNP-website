import React from 'react'
import { useNavigate } from "react-router-dom";

const LoginWindow = () => {
  const navigate = useNavigate();

  return (



<div className="relative min-h-screen bg-cover bg-center " 
     style={{ backgroundImage: "url('https://www.rgpv.ac.in/images/slider/new_slide1.jpg')" }}>
  
  
  <div className="absolute  bg-white inset-0  opacity-70 "></div>

  {/* Content */}
  <div className="relative flex flex-col items-center justify-center h-screen pl-2 ">
    <img 
      src="https://whatthelogo.com/storage/logos/rajiv-gandhi-proudyogiki-vishwavidyalaya-95752.png" 
      alt="rgpv-logo" 
      className="mb-6 w-32 h-32"
    />
    <h1 className="text-3xl font-semibold mb-2 pl-1">Welcome to Student Portal</h1>
    <h4 className="mb-6 pl-0.5 text-gray-800">Please login or sign up to continue</h4>

    <button className="bg-red-900 hover:bg-red-500 text-white py-2 px-6 rounded mb-4 w-95">
      Login
    </button>
    <button onClick={() => navigate("/signup")} className="bg-white hover:bg-black hover:text-white py-2 px-6 rounded border w-95">
      Sign Up
    </button>
  </div>
</div>

   
  )
}

export default LoginWindow
