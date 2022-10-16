import { useParams } from "react-router-dom"

const CryptoEachInfo = () => {

  const params = useParams()

  return(
    <div className="div-behind-navbar">
      <div className="sub-div">
        <h2>Hi there, I am {params.id}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque reprehenderit iste quae sint maxime ipsa dolores enim eaque, assumenda ratione officiis, amet sunt porro aperiam, perspiciatis odio voluptatum hic.</p>
      </div>
    </div>
  )
}

export default CryptoEachInfo
