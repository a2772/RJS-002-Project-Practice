import Numbers from "../../models/utilities/Numbers.js"

const CryptoPreview = ({idC, nameC, priceUsdC, itemIndex, decimalsPrice = 4, maxLength = 10 }) => {
    const priceDisplayed = Numbers.formatString(Numbers.roundNumberAndAddDecimals(priceUsdC, decimalsPrice, maxLength))
    const classType = itemIndex % 2 != 0 ? "row-one" : "row-two"
    return (
        <div id={`cryptoPrev-${idC}`} className={`table-row ${classType}`}>
            <div className={`table-cell table-text-left`}>{`${itemIndex} - ${idC}`}</div>
            <div className={`table-cell table-text-left`}>{nameC}</div>
            <div className={`table-cell table-text-rigth`}>$ {priceDisplayed}</div>
        </div>
    )
}

export default CryptoPreview
