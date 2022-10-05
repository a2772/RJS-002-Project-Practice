import axios from "axios"
import { useEffect, useState } from "react"
import CryptoPreview from "./cryptoPreview"

const CryptoMenu = () => {
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

    if (!cryptos) return(<div className="cryptos-div">Loading... please wait</div>)
    return(
        <div className="table">
            <div className="table-caption">Cryptos list</div>
            <div className="table-header">
                <div className="table-cell-header">ID</div>
                <div className="table-cell-header">Name</div>
                <div className="ttable-cell-header">Price</div>
            </div>
            <div className="table-body">
                {
                    cryptos.map(({id, name, priceUsd}) => 
                    (<CryptoPreview key={id} idC={id} nameC={name} priceUsdC={priceUsd} />))
                }
            </div>
            <div className="table-footer">
                <div className="footer-cell">ID Footer</div>
                <div className="footer-cell">Name Footer</div>
                <div className="footer-cell">Price Footer</div>
            </div>
        </div>
    )
}

export default CryptoMenu
