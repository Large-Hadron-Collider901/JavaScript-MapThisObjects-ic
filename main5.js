// 5. Use ```map``` to take an array of names and return a new array that contains instances of objects you instantiated from the class below

// ```
//  class Student{
//          constructor(name){
//                this.name = name;
//                 }
//  }
// // ```

// Iterate through the array returned using ```forEach``` and print the name property from each object instance in the array.

class Student {
  constructor(name) {
    this.name = name;
  }
}

const namesArray = ["bob", "mark", "jody", "melissa", "kevin"];

let studentInstances = namesArray.map((el) => {
  return new Student(el);
});

studentInstances.forEach((el) => {
  console.log(el.name);
});
