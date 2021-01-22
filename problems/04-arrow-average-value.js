/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667

// fatt arrow syntax //
// return average num / divisor
// let divisor = array.length
//  create sum counter
// for loop

***********************************************************************/
const arrowAvgValue = (nArray) => {
  let sum = 0;
  let divisor = nArray.length;

  for (let i = 0; i < nArray.length; i++){
    let currentNumber = nArray[i];
    sum += currentNumber;
  }
  return sum / divisor;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  return undefined;
}
