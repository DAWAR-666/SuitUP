import Header from "./Header"


const Browser = () => {
  return (
    <div>
      <Header/>
      <div className="absolute -z-10">
          <img src="bgLogo.png" alt="bglogo" className="w-screen h-screen"/>
      </div>
    </div>
  )
}

export default Browser