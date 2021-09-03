// 2. Use ```.map``` to create a new array of objects where each object has a property for ```index``` and ```value``` based on the elements in the array. Print the new array of objects.

// ```
let arr2 = [1, 2, 3, 4];
let num_objects = []; // new array to hold objects
// ```

// Example Object to Return:
// ```
// {
//   index: 1,
//   value: 2
// }
// ex 2

num_objects = arr2.map((el, idx) => {
  return {
    index: idx,
    value: el,
  };
});

console.log(num_objects);
