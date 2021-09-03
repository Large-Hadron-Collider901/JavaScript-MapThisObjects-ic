// 3. Use ```.reduce``` to return the sum of all the numbers, each multiplied by 2. Print the final sum value.

// let arr = [1, 2, 3, 4];
// let nums_doubled_sum = []; // new variable assign the final sum

let arr3 = [1, 2, 3, 4];
let sumOfNumTimesTwo = arr3.reduce((runningTotal, nextValueEl) => {
  return (runningTotal = runningTotal + nextValueEl * 2);
}, 0);

console.log(sumOfNumTimesTwo);
