const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(array) {
  return array.reduce((acc, curr) => acc * curr, 1);
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(n) {
    if (n < 0) {
        return -1; // Factorial is not defined for negative numbers
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
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
