import { Link } from "react-router-dom"
import Numbers from "../../models/utilities/Numbers.js"

const CryptoGridItem = ({ idC, nameC, priceUsdC, symbol, itemIndex, last24, decimalsPrice = 4, maxLength = 10 }) => {
	const priceDisplayed = Numbers.formatString(Numbers.roundNumberAndAddDecimals(priceUsdC, decimalsPrice, maxLength))
	const last24Display = parseFloat(last24).toFixed(4)
	const class24 = last24Display === 0 ? "last-24-neutral" : last24Display < 0 ? "last-24-negative" : "last-24-positive"

	return (
		<div id={`cryptoPrevGrid-${idC}`} className="crypto-unit">
			<h3 className="criptos-grid-name">{`${itemIndex} - ${nameC}`}</h3>
			<div className="crypto-info">
				<p><span className="crypto-label">Price: </span>${priceDisplayed}</p>
				<p><span className="crypto-label">Ticker: </span>{symbol}</p>
				<p><span className="crypto-label">Change last 24 h: </span><span className={class24}>{last24Display}%</span></p>
				<Link to={`/crypto/${idC}`}><p> Go to {idC} </p></Link>
			</div>
		</div>
	)
}

export default CryptoGridItem
