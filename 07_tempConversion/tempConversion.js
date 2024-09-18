const roundNumber = function(number, decimals) {
  return Math.round(number * 10 * decimals) / (10 * decimals);
};

const convertToCelsius = function(fahrenheit) {
  let conversionResult = (fahrenheit - 32) * (5/9);
  return roundNumber(conversionResult, 1);
};

const convertToFahrenheit = function(celcius) {
  let conversionResult = celcius * (9/5) + 32;
  return roundNumber(conversionResult, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
