// 4. Use ```.filter``` to return a new array that contains only the even numbers. Print the new array.

// let arr = [1, 22, 35, 40, 60, 2, 8, 100, 600, 3, 99, 71];
// let even_vals = []; // new array to hold result

// ex 4
let arr4 = [1, 22, 35, 40, 60, 2, 8, 100, 600, 3, 99, 71];
let even_vals = [];

even_vals = arr4.filter((el) => {
  // check to see if even
  return el % 2 === 0;
});

console.log(even_vals);
