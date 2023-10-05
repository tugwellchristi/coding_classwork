/*
  REST OPERATOR:
    - Allows a function to accept an indefinite number of arguments as an array.
    - Collects multiple elements and "condenses" them into a single element
    - Used when you declare a function. 
    - Rest must be used in the last parameters
    - SYNTAX:
      function add(...arguments) {
        ...
      }
*/

// without rest
function add(x, y) {
  return x + y;
}

console.log(add(2,3)); // => 5
// console.log(add(2,3,4)); // => 5

// 1. rest
function add(...nums) {
  console.log(nums);
  console.log(nums);
  let sum = 0;
   for (let num of nums) {
     sum += num;
   } 
   return sum;
 }

// console.log(add(1)); // => 1
// console.log(add(3, 3)); // => 6
// console.log(add(1, 1, 4, 5)); // => 11


// 2. Rest
// ex: function to add students to a breakout room
// function addStudentsRoom(roomId, students) {
//   console.log('add students to room with ID: ', roomId);
//   console.log('students to add into room', students);
// }

// addStudentsRoom(1, 'John');
// addStudentsRoom(2, 'Mike', 'Larry');
// addStudentsRoom(3, 'Sarah', 'Albert', 'Louis', 'Bill');

// 3. 
// function howManyArgs(...args) {
//   return `You passed ${args.length} arguments.`; // point out the template literal
// }

// console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
// console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.

/*
  SPREAD OPERATOR:
    - Allows an array to be expanded. 
    - Spread syntax looks exaclty like the rest syntax; not used when you declare
    a function.
    - SYNTAX:
      ...value
    - Spread syntax "expands" an array into it's 
*/

// 1. spread
// const dragons = ["Drogon", "Viserion", "Rhaegal"];
// const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons

// console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]



/*
  SUMMARY:
      REST:
        - Collect arguments in a function
        - SYNTAX:
          - 3 dots when you declare a function parameters
      SPREAD:
        - Expand out values
          - 3 dots when you reference a value 
*/


function add(...nums){ // rest operator
  console.log(nums);
}
add(1,2,3);

const numsToAdd = [3,4,5];
add(...numsToAdd); // spread operator, will expand array to 2 separate values