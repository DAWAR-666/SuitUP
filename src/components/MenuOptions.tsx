import SuitTypes from './SuitTypes'
import Dimensions from './Dimensions'
import { useState } from 'react'
const MenuOptions= () => {
  const [step,setStep]=useState<number>(0);
  
  return (
    <div
    className="animate-slide-left absolute w-55/100 bg-black/70 h-72/100 rounded-r-4xl grid grid-cols-1 grid-rows-1"
    >
        <div className="m-5 ml-0 border-white border-4 border-l-0 rounded-r-4xl col-span-full row-span-full grid grid-cols-12 grid-rows-12">
          <h1 className="text-center text-3xl font-bold p-1 mb-1 row-span-1 col-start-4 col-end-10 bg-white rounded-b-xl">Craft Your Cool</h1>
          {(step===0)?<Dimensions/>:<SuitTypes/>}
          
          {step===1&&(<button 
            className="bg-white col-start-2 col-end-6 row-start-11 m-1 text-xl cursor-pointer border-2 border-white rounded-4xl"
            onClick={()=>setStep(0)}
            
          >
              {'<-'} prev
          </button>)}
          <button 
            className=" bg-white m-1 col-start-8 col-end-12 row-start-11 text-xl cursor-pointer border-2 border-white rounded-4xl"
            onClick={()=>(setStep(1))}
          >
              {step===1?`SUBMIT`:`next ->`}
          </button>
        </div>
    </div>
  )
}

export default MenuOptions