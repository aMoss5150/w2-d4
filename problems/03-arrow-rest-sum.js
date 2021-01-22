/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
// create a fat arrow function
// accept ALL params using rest ...n
// use const
// iterate through and create counter
// sum += n
***********************************************************************/

const arrowRestSum = (...n) => {
let sum = 0;

  for (let i = 0; i < n.length; i++){
    let currentNumber = n[i];
    sum += currentNumber;
  }

  return sum;
}

arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  return undefined;
}
