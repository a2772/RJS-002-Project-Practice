import { Link } from "react-router-dom"

const LandingPage = () => {
  return(
    <div className="div-behind-navbar">
      <div className="sub-div">
        <h2>Welcome to the landing Page</h2>
        <p>Know about top 100 Cryptos</p>
        <Link to="/crypto"><p className="no-decoration">Take me there!</p></Link>
      </div>
    </div>
  )
}

export default LandingPage
