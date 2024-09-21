const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce( (acc, el) => acc + el , 0);
};

const multiply = function(arr) {
  return arr.reduce( (acc, el) => acc * el , 1);
};

const power = function(number, power) {
  let res = 1;

  while (power-- != 0)
    res *= number;

    return res;
};

const factorial = function(number) {
  if (number === 0) return 1;
  return Array.from(Array(number + 1).keys())
    .slice(1)
    .reduce( (acc, el) => acc * el, 1);
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
