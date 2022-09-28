import { useEffect, useState } from "react"

const App = () => {
  const apiURL = import.meta.env.VITE_API_URL
  const [cryptos, setCryptos] = useState()
  useEffect(()=>{
    fetch(`${apiURL}assets`)
    .then((fetchedInfo) => fetchedInfo.json())
    .then((datJson) => {
      setCryptos(datJson.data)
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
