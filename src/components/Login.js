import React from 'react';
import Header from './Header';
import { useState } from "react";

const Login = () => {
  const[isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header/> 
      <div className="absolute">
        {/* background img at login below */}
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg"/>
      </div>
      {/* login/sign in integrated form below */}
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && 
          <input 
            type="text"
            placeholder="Full Name" 
            className="p-4 my-2 w-full bg-gray-800 "
          />}
        <input 
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-800"
        />
        
        <input 
          type="Password" 
          placeholder="Password" 
          className="p-4 my-2 w-full bg-gray-800 "
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
       
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm} >
          {isSignInForm ? "New to Netflix? Sign Up Now." : "Already a User? Sign In Now."}
        </p>

      </form>
    </div>
    
  )
};

export default Login
