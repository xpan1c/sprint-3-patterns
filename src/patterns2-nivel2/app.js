const currencyConverterObj = require('./currency_conversions.json');
const c = "USD"
const currencyConverter = (currency, amount) => 
    currencyConverterObj[currency +"_EUR"] * amount;

console.log(currencyConverter("USD", 10));

const currencyDecorator = (conversionFunction) => conversionFunction(currencyConverter(currency, amount))
const converter = (amount) => amount;
const converterToEuros = currencyDecorator(converter);
