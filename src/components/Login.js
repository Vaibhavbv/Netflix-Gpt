import React, { useState } from 'react'
import Header from './Header'
import { bgimg } from '../utils/constants'

const Login = () => {

  const [isSignInForm , setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="relative w-full h-full">
        <img src= {bgimg} alt="logo" className="absolute w-full h-full object-cover " />
        <div className="flex items-center justify-center min-h-screen">
          <form className="w-1/4 relative z-10 text-white bg-black bg-opacity-75 px-20 py-16 rounded-lg shadow-lg">
            <h1 className='font-bold text-4xl mb-8'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <input type="text" placeholder="Email or mobile number" className="w-full h-14 p-2 my-2 rounded border border-gray-600 bg-transparent " />
            <input type="password" placeholder="Password" className="w-full h-14 p-2 my-2 rounded border border-gray-600 bg-transparent" />
            <button className="font-bold w-full h-11 my-2 bg-customRed  text-white rounded">{isSignInForm ? "Sign In" : "Sign Up"} </button>
            <h1 className=' text-l mx-36 py-2'>OR</h1>
            <button className="w-full p-4 my-2 bg-opacity-40 bg-gray-700 text-white rounded">Use a sign-in code</button>
            <h1 className=' text-l mx-24 py-2'>Forgot password?</h1>
            <div className="flex items-center my-3 ">
              <input type="checkbox" id="remember" className="mr-2 transform scale-125" />
              <label htmlFor="remember" className="text-white text-l">Remember me</label>
            </div>
            <p className='text-l py-2 cursor-pointer' onClick={toggleSignInForm}>
              {isSignInForm ? (
                <>New to Netflix? <span className="underline">Sign up now.</span></>
              ) : (
                <>Already a user? <span className="underline">Sign in now.</span></>
              )}
            </p>
            <h6 className='text-sm my-4'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</h6>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
