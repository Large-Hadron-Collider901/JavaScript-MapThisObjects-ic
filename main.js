// 1. Use ```.map``` to take the code from the array below, and place the results in a new array where each value is 5 more than it was in the the original array. Print the new array.

// ```
// let arr = [1, 2, 3, 4];
// let plus5 = []; // new array to hold result

// ex 1

let arr = [1, 2, 3, 4];
let plus5 = [];

plus5 = arr.map((el) => {
  return el + 5;
});

console.log(plus5);
