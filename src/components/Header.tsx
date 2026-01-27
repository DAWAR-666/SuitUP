import type { RootState } from "../utils/appStore"
import { useDispatch, useSelector } from "react-redux"
import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";


const Header = () => {
  const user=useSelector((store:RootState)=>store.user)
  const dispatch=useDispatch();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
    });
  }
  
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