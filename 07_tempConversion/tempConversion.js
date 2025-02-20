const convertToCelsius = function(fanhrenheit) {
  const celsiusTemp = (fanhrenheit - 32) * 5/9;
  return (parseFloat(celsiusTemp.toFixed(1)));
};

const convertToFahrenheit = function(celsius) {
  const fanhrenheitTemp = (celsius * 9/5) + 32;
  return (parseFloat(fanhrenheitTemp.toFixed(1)));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
