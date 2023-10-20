const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32) * 5 / 9;
  if(Number.isInteger(tempC)){
    return tempC;
  } else{
    tempC = Math.round(tempC * 1e1) / 1e1
    return tempC
  };
  
};

const convertToFahrenheit = function(tempC) {
  let tempF = (tempC * 9 / 5) + 32;
  if(Number.isInteger(tempF) == true){
    return tempF;
  } else{
    tempF = Math.round(tempF * 1e1) / 1e1;
    return tempF;
  };
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
