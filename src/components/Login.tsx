import { useRef, useState } from "react";
import Header from "./Header"
import validate from "../utils/validate";
import {auth} from "../utils/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const dispatch=useDispatch();
  const [isSignedIn,setSignedIn]=useState(true);
  const [errorMsg,setErrorMsg]=useState<string>("");
  const toggleSignIn=()=>{
    setSignedIn(!isSignedIn);
  }
  const firstName=useRef<HTMLInputElement | null>(null)
  const lastName=useRef<HTMLInputElement | null>(null)
  const mail=useRef<HTMLInputElement | null>(null);
  const pswd=useRef<HTMLInputElement | null>(null);
  
  const submitBtn=()=>{
    const email=(mail?.current as HTMLInputElement)?.value;
    const pwd=(pswd?.current as HTMLInputElement)?.value;
    const fullName =(firstName?.current as HTMLInputElement)?.value+" "+(lastName?.current as HTMLInputElement)?.value; 
    const validation=validate(email,pwd);
    setErrorMsg(validation)
    if (validation !=="") return;
    if(!isSignedIn){
            createUserWithEmailAndPassword(auth, email, pwd)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: fullName
                        }).then(() => {
                        // Profile updated!
                        // ...
                        if(auth.currentUser){
                            const { uid , email ,displayName} = auth.currentUser;
                            dispatch(addUser({uid:uid,email:email,displayName:displayName}));   
                        }})
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + " "+ errorMessage);
            });
        }
    else{
            signInWithEmailAndPassword(auth, email, pwd)
                .then((_userCredential) => {
                    // Signed in 
                    //const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + " "+ errorMessage);
                });

        }
  }
  return (
    <div>
      <Header />
      <form onSubmit={(e)=>{e.preventDefault()}}
        className="w-3/12 absolute bg-black/70 text-white my-50 mx-auto left-0 right-0 p-5 rounded-lg">
        <h1 className="text-center text-5xl m-3">{isSignedIn? 'Sign In':'Sign Up'}</h1>
        {!isSignedIn && 
        <>
        <input ref={firstName} type="text" placeholder="First Name" className="border w-1/2 my-2  p-2 text-2xl rounded-lg" />
        <input ref={lastName} type="text" placeholder="Last Name" className="border w-1/2 my-2  p-2 text-2xl rounded-lg" />
        </>
        }
        <input ref={mail} type="email" placeholder="Email" className="border w-full my-2 p-2 text-2xl rounded-lg" />
        <input ref={pswd} type="password" placeholder="Password" className="border w-full my-2 p-2 text-2xl rounded-lg" />
        <p className="text-red-400 text-lg">{errorMsg}</p>
        <button 
          className="border w-full my-2 rounded-lg p-2 text-xl bg-black hover:bg-black/40 cursor-pointer"
          onClick={submitBtn}
        >
        {isSignedIn? 'Sign In':'Sign Up'}</button>
        <p className="cursor-pointer my-2" onClick={toggleSignIn}>
          {isSignedIn? 'First time buying a suit? Sign Up':'Already have an account? Sign in'}</p>
      </form>
    </div>
  )
}

export default Login