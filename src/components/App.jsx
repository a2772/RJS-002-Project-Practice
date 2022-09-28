import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
  const apiURL = import.meta.env.VITE_API_URL
  const [cryptos, setCryptos] = useState()
  useEffect(()=>{
    axios.get(`${apiURL}assets`)
    .then((datJson) => {
      setCryptos(datJson.data.data)
    })
    .catch((err) => {
      console.error(err.message)
    })
  }, [])

  if (!cryptos) return(<div>Loading... please wait</div>)

  return(
    <>
      <h1>Hello World!</h1>
      <ol>
        {
          cryptos.map(({id, name, priceUsd}) => (
            <li key={id}>{name}   ${priceUsd}</li>
          ))
        }
      </ol>
    </>
  )
}

export default App
