// Callback functions

//! 1. anonymous function (most used one)

// function keyword

const values = [100, 200, 400, 600];

const newValues = values.map(function (element, index, array) {
  // Modify and return elements
  return element;
  //   return index;
  //   return array;
});

console.log(newValues);

// arrow function
const newValues2 = values.map((element, index, array) => {
  return index;
});

console.log(newValues2);

//! 2. separate callback function.

const valuesTwo = [100, 200, 400, 600];
function callbackFunction(element, index, array) {
  // modify and return values
  console.log(element);
}

const newValuesThree = values.map(callbackFunction);
