import { useState } from "react";
import Header from "./Header"

const Login = () => {
  const [isSignedIn,setSignedIn]=useState(true);
  const toggleSignIn=()=>{
    setSignedIn(!isSignedIn);
  }
  return (
    <div>
      <Header />
      <form onSubmit={(e)=>{e.preventDefault()}}
        className="w-3/12 absolute bg-black/70 text-white my-50 mx-auto left-0 right-0 p-5 rounded-lg">
        <h1 className="text-center text-5xl m-3">{isSignedIn? 'Sign In':'Sign Up'}</h1>
        {!isSignedIn && 
        <>
        <input type="text" placeholder="First Name" className="border w-1/2 my-2  p-2 text-2xl rounded-lg" />
        <input type="text" placeholder="Last Name" className="border w-1/2 my-2  p-2 text-2xl rounded-lg" />
        </>
        }
        <input type="email" placeholder="Email" className="border w-full my-2 p-2 text-2xl rounded-lg" />
        <input type="password" placeholder="Password" className="border w-full my-2 p-2 text-2xl rounded-lg" />
        <p className="text-red-400 text-lg">errorMsg</p>
        <button className="border w-full my-2 rounded-lg p-2 text-xl bg-black hover:bg-black/40 cursor-pointer">
        {isSignedIn? 'Sign In':'Sign Up'}</button>
        <p className="cursor-pointer my-2" onClick={toggleSignIn}>
          {isSignedIn? 'First time buying a suit? Sign Up':'Already have an account? Sign in'}</p>
      </form>
    </div>
  )
}

export default Login