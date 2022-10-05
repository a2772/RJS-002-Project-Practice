import Numbers from "../../models/utilities/Numbers.js"

const CryptoPreview = ({idC, nameC, priceUsdC, decimalsPrice = 4, maxLength = 10 }) => {
    const priceDisplayed = Numbers.formatString(Numbers.roundNumberAndAddDecimals(priceUsdC, decimalsPrice, maxLength))
    return (
        <div id={`cryptoPrev-${idC}`} className="table-row">
            <div className="table-cell left">{idC}</div>
            <div className="table-cell center">{nameC}</div>
            <div className="table-cell rigth">$ {priceDisplayed}</div>
        </div>
    )
}

export default CryptoPreview
