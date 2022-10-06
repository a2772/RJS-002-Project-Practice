import Numbers from "../../models/utilities/Numbers.js"

const CryptoTabItem = ({ idC, nameC, symbol, priceUsdC, last24, itemIndex, decimalsPrice = 4, maxLength = 10 }) => {
	const priceDisplayed = Numbers.formatString(Numbers.roundNumberAndAddDecimals(priceUsdC, decimalsPrice, maxLength))
	const classType = itemIndex % 2 != 0 ? "row-one" : "row-two"

	const last24Display = parseFloat(last24).toFixed(4)
	const class24 = last24Display === 0 ? "last-24-neutral" : last24Display < 0 ? "last-24-negative" : "last-24-positive"

	return (
		<div id={`cryptoPrevTab-${idC}`} className={`table-row ${classType}`}>
			<div className={`table-cell table-text-left`}>{`${itemIndex} - ${idC}`}</div>
			<div className={`table-cell table-text-center`}>{`${symbol}`}</div>
			<div className={`table-cell table-text-left`}>{nameC}</div>
			<div className={`table-cell table-text-rigth`}>$ {priceDisplayed}</div>
			<div className={`table-cell table-text-rigth ${class24}`}>{last24Display}%</div>
		</div>
	)
}

export default CryptoTabItem
