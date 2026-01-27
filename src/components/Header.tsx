import type { RootState } from "../utils/appStore"
import { useDispatch, useSelector } from "react-redux"
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import {  useNavigate } from "react-router-dom";


const Header = () => {
  const user=useSelector((store:RootState)=>store.user)
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((_error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const { uid , email ,displayName} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
            });
            return ()=>unsubscribe();
    },[])
  return (
    <div className="absolute flex items-center w-full justify-between z-10 border-b-8">
        <div className="flex items-center">
            <img src="logo.jpg" alt="logo" className="w-1/4 m-6" />
            <h1 className="text-5xl font-bold">Suit UP</h1>
        </div>
        <div>
          {user && 
          (<button onClick={handleSignOut}>Sign out</button>)}
        </div>        
    </div>
  )
}

export default Header