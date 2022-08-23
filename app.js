// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.2;

    return valueInEuro * 127.9;
}

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 127.9;

    return valueInEuro * 0.8;
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { fromDollarToYen, fromYenToPound, fromEuroToDollar, sum };