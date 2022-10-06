import axios from "axios"
import { useEffect, useState } from "react"
import CryptoGridItem from "./CryptoGridItem"

const CryptoGrid = () => {
	const apiURL = import.meta.env.VITE_API_URL
	const [cryptos, setCryptos] = useState()
	useEffect(() => {
		axios.get(`${apiURL}assets`)
			.then((datJson) => {
				setCryptos(datJson.data.data)
			})
			.catch((err) => {
				console.error(err.message)
			})
	}, [])

	if (!cryptos) return (<div>Loading... please wait</div>)

	return (
		<div className="cryptos-area">
			<div className="cryptos-grid-area">
				<h2 className="criptos-grid-title">Cryptos grid</h2>
				<div className="cryptos-grid-container">
					{
						cryptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }, itemIndex) =>
							(<CryptoGridItem key={id} idC={id} last24={changePercent24Hr} symbol={symbol} nameC={name} priceUsdC={priceUsd} itemIndex={itemIndex} />))
					}
				</div>
			</div>
		</div>
	)
}

export default CryptoGrid
