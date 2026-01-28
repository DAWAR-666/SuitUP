import { DIMENSION_LIMITS, dimensions } from "../utils/const"

const SuitTypes = () => {
  return (
    <>
                  <h1 className="pl-3 py-1 text-2xl row-span-1 col-start-9 col-end-13 bg-white rounded-l-4xl">What's Your Style?</h1>
                  
                    <div className="m-5 row-start-3 row-end-11 col-span-full overflow-y-auto pr-2 custom-scrollbar">
                  <div className="grid grid-cols-2 gap-4">
                    {dimensions.map((dim) => (
                      <div key={dim} className="flex flex-col">
                        <label className="text-white capitalize ml-2 mb-1 text-sm">
                          {DIMENSION_LIMITS[dim].label}
                        </label>
                        <input
                          type="number"
                          placeholder={`${dim} (cm)`}
                          min={DIMENSION_LIMITS[dim].min}
                          max={DIMENSION_LIMITS[dim].max}
                          className="bg-gray-400 w-full border-2 border-white rounded-full text-center text-xl p-2 placeholder:text-gray-600 focus:outline-none focus:bg-white transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                  </>
  )
}

export default SuitTypes