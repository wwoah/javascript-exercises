const convertToCelsius = function(F) {  
  let CtoF = ((F-32.00)*5.00)/9.00;
  let result = Math.round(CtoF * 10) / 10
  return result;
};

const convertToFahrenheit = function(C) {
  let FtoC = (9.00/5.00)*C + 32.00;
  let result = Math.round(FtoC * 10) / 10
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
