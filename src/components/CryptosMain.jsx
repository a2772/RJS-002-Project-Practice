import ParallaxStyleOne from "./design/ParallaxStyleOne"
import CryptoTable from "./crypto/CryptoTable"
import CryptoGrid from "./crypto/CryptoGrid"

const CryptosMain = () => {
  return(
  	<>
      <ParallaxStyleOne 
        classNameParallax="par-01" 
        headerCont="KOZNAARP 72 SRP"
        captionCont="Welcome"
      />
      <div className="beginning">
        <h1>Welcome to the app</h1>
        <p>Here you can examine different examples using React.js</p>
      </div>
      <ParallaxStyleOne 
        classNameParallax="par-02 par-01" 
        headerCont="First exercise"
        captionCont="Cryptos list"
      />
      <CryptoTable />
      <ParallaxStyleOne 
        classNameParallax="par-03 par-01" 
        headerCont="Second exercise"
        captionCont="Cryptos grid"
	    />
      <CryptoGrid />
    </>
  )
}

export default CryptosMain
