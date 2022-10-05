//Formats a string with its correspoding separators of thousands
const formatString = x => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};
//Gives a number a certain number of decimals
const roundNumberAndAddDecimals = (number, decimals, maxLength) => {
    let decimalsToApply = decimals
    let numberAux = number
    //Recalculate decimals, according first significative cypher
    while(Number(numberAux) < 0.1){
        decimalsToApply ++
        numberAux *= 10
    }
    let numberResult = Math.round(number * Math.pow(10,decimalsToApply))/
        Math.pow(10,decimalsToApply)
    if(numberResult.toString().indexOf(".") === -1)//If has not dot, example 0 or 10, we add it
        numberResult += "."
    while(decimalsToApply - (numberResult.toString().length - Math.floor(numberResult).toString().length - 1) 
        > 0 && numberResult.toString().length < maxLength){
            numberResult += "0"
    }
    return numberResult
}

export default { formatString, roundNumberAndAddDecimals }
