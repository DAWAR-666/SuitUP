const MenuOptions= () => {
  return (
    <div
    className="animate-slide-left absolute w-55/100 bg-black/70 h-72/100 rounded-r-4xl grid grid-cols-1 grid-rows-1"
    >
        <div className="m-5 ml-0 border-white border-4 border-l-0 rounded-r-4xl col-span-full row-span-full grid grid-cols-12 grid-rows-12">
          <h1 className="text-center text-3xl font-bold p-1 mb-1 row-span-1 col-start-4 col-end-10 bg-white rounded-b-xl">Craft Your Cool</h1>
          <h1 className="pl-3 py-1 text-2xl row-span-1 col-start-1 col-end-5 bg-white rounded-r-4xl">What's Your Fit?</h1>
          
            <div className="m-5 row-start-3 row-end-12 col-span-full">
                <label>
                  height 
                </label>
                <input 
                  type="number" 
                  placeholder="height(cm)" 
                  min={50} 
                  max={300} 
                  className="bg-gray-400 w-1/4 border-2 m-2 border-white rounded-full text-center text-xl p-2"/>
                <input 
                  type="number" 
                  placeholder="chest(cm)" 
                  min={50} 
                  max={300} 
                  className="bg-gray-400 w-1/4 border-2 border-white m-2 rounded-full text-center text-xl p-2"/>
               
            </div>
          
          <button className="bg-white col-start-2 col-end-6 m-1 text-xl cursor-pointer border-2 border-white rounded-4xl">{'<-'} prev</button>
          <button className=" bg-white m-1 col-start-8 col-end-12 text-xl cursor-pointer border-2 border-white rounded-4xl">next {'->'}</button>
        </div>
    </div>
  )
}

export default MenuOptions