import ParallaxStyleOne from "./design/ParallaxStyleOne"
import StartData from "./StartData"
import NavBar from "./navegation/NavBar"

const App = () => {

  return(
    <>
      <NavBar />
      <ParallaxStyleOne 
        classNameParallax="par-01" 
        headerCont="KOZNAARP 72 SRP"
        captionCont="Welcome"
      />
      <StartData />
      <ParallaxStyleOne 
        classNameParallax="par-02 par-01" 
        headerCont="Main funcitions"
        captionCont="Here you can search specific topics"
      />
    </>
  )
}

export default App
