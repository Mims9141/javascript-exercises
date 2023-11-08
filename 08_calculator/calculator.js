const add = function(num1, num2) {
	if (Number.isInteger(num1 + num2)){
    return num1 + num2
  }
};

const subtract = function(num1, num2) {
	if(Number.isInteger(num1 - num2)){
    return num1 - num2
  }
};

const sum = function(arr) {
	const value = arr.reduce((sum, current) => sum + current, 0);
  return value;
};

const multiply = function(arr) {
  const value = arr.reduce((times, current) => times * current, 1);
  return value;
};

const power = function(num, power) {
  let value = 1;
	for(let i = 0; i < power; i++){
    value = value*num;
  };
  return value;

};

const factorial = function(num) {
  if(num > 1){
  let value = num;
	for(let i = 1; i < num; i++){
    value = value * (num - i);
  }
  return value;
} else {return 1}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
