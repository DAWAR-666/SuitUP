const MenuOptions= () => {
  return (
    <div
    className="absolute w-55/100 bg-black/50 h-72/100 rounded-r-4xl grid grid-cols-1 grid-rows-1"
    >
        <div className="m-5 ml-0 border-white border-4 border-l-0 rounded-r-4xl col-span-full row-span-full grid grid-cols-12 grid-rows-12">
          <h1 className="text-center text-3xl font-bold m-2 row-span-1 col-span-full">Craft Your Cool</h1>
          <h1 className="mx-3 text-2xl row-span-1 col-span-full">What's Your Fit?</h1>
          
            <div className="m-5 row-start-3 row-end-12 col-span-full">
              
                <input type="number" placeholder="height(cm)" min={50} max={300} className="w-1/4 border-2 m-2"/>
                <input type="number" placeholder="height(cm)" min={50} max={300} className="w-1/4 border-2 m-2"/>
               
            </div>
          
          <button className="col-start-2 col-end-6 m-1 text-xl cursor-pointer border-2 border-white rounded-4xl">{'<-'} prev</button>
          <button className=" m-1 col-start-8 col-end-12 text-xl cursor-pointer border-2 border-white rounded-4xl">next {'->'}</button>
        </div>
    </div>
  )
}

export default MenuOptions