import Header from "./Header"
import ImgBox from "./ImgBox"
import MenuOptions from "./MenuOptions"

const Browser = () => {
  return (
    <div className="bg-[url(bgLogo.png)] bg-repeat w-screen h-screen">
      <Header/>
      <div>
        <ImgBox/>
        <MenuOptions/>  
      </div>
    </div>
  )
}

export default Browser