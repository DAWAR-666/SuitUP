

const SuitTypes = () => {
  return (
    <>
                  <h1 className="pl-3 py-1 text-2xl row-span-1 col-start-9 col-end-13 bg-white rounded-l-4xl">What's Your Style?</h1>
                  
                    <div className="m-5 row-start-3 row-end-11 col-span-full overflow-y-auto pr-10 pt-5 ">
                  <div className="grid grid-cols-2 gap-4">
                    
                        <label className="text-white text-center text-3xl capitalize ml-2 mb-1 ">
                          BLACK TUXEDO
                        </label>
                        <button
                          className="bg-linear-to-r from-black to-white w-full border-2 border-white rounded-full  p-5 focus:shadow-white focus:shadow-2xl focus:scale-[1.10] transition"
                        />
                      
                      
                      
                      <label className="text-white text-center text-3xl capitalize ml-2 mb-1 ">
                          RED VELVET
                        </label>
                        <button
                          className="bg-linear-to-r from-red-500 to-black w-full border-2 border-white rounded-full  p-5 focus:shadow-white focus:shadow-2xl focus:scale-[1.10] transition"
                        />
                        <label className="text-white text-center text-3xl capitalize ml-2 mb-1 ">
                          OFFICE BLUE
                        </label>
                        <button
                          className="bg-linear-to-r from-blue-950 to-white via-blue-950 w-full border-2 border-white rounded-full  p-5 focus:shadow-white focus:shadow-2xl focus:scale-[1.10] transition"
                        />
                        <label className="text-white text-center text-3xl capitalize ml-2 mb-1 ">
                          CASUAL TAN
                        </label>
                        <button
                          className="bg-linear-to-r from-amber-100 to-white via-amber-100 w-full border-2 border-white rounded-full  p-5 focus:shadow-white focus:shadow-2xl focus:scale-[1.10] transition"
                        />
                    
                  </div>
                </div>
                  </>
  )
}

export default SuitTypes