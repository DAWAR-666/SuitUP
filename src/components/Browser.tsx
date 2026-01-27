import Header from "./Header"
import ImgBox from "./ImgBox"
import MenuOptions from "./MenuOptions"

const Browser = () => {
  return (
    <div className="bg-[url(bgLogo.png)] bg-repeat w-screen h-screen grid grid-cols-12 grid-rows-12 gap-20">
      <div className="col-span-full row-span-1">
        <Header/>
      </div>
      <div className=" col-start-1 row-start-3">
        <MenuOptions/>
      </div>
      <div className="col-end-12 row-start-3 ">
        <ImgBox/>
      </div>   
    </div>
  )
}

export default Browser