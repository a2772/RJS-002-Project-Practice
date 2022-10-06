import axios from "axios"
import { useEffect, useState } from "react"
import CryptoTabItem from "./CryptoTabItem"

const CryptoTable = () => {
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
			<div className="table">
				<div className="table-caption">Cryptos list</div>
				<div className="table-header">
					<div className="table-cell-header table-text-center">ID</div>
					<div className="table-cell-header table-text-center">Ticker</div>
					<div className="table-cell-header table-text-center">Name</div>
					<div className="table-cell-header table-text-center">Price</div>
					<div className="table-cell-header table-text-center">Change 24 h</div>
				</div>
				<div className="table-body">
					{
						cryptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }, itemIndex) =>
						(<CryptoTabItem
							key={id}
							idC={id}
							symbol={symbol}
							nameC={name}
							priceUsdC={priceUsd}
							last24={changePercent24Hr}
							itemIndex={itemIndex}
						/>))
					}
				</div>
				<div className="table-footer">
					<div className="footer-cell">Cryptos ID and its correspondign number</div>
					<div className="footer-cell">Symbol or ticker</div>
					<div className="footer-cell">Crypto's name</div>
					<div className="footer-cell">Actual price (USD)</div>
					<div className="footer-cell">Change in % the last 24 hours</div>
				</div>
			</div>
		</div>
	)
}

export default CryptoTable
