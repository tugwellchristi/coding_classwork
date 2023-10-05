// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here? --spread, It's used to create a new array newSongs by spreading the elements from the songs array into it. 
// This operator is commonly used for array and object operations in JavaScript to make shallow copies of arrays or objects. 
//In your case, it duplicates the songs array into a new array, newSongs, effectively creating a copy of its elements.
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console? A new array, copy of the array from line 2
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];

  // TODO: What does the reduce() method do? - add all the numbers from the array
  // The reduce() method in JavaScript is used to reduce an array to a single value. 
  // It iterates through the array and accumulates the values by applying a given function to each element, resulting in a single output. 
  // It's often used for operations like summing up all the elements in an array or finding the maximum value. 
 
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console? - 6
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter? - rest operator
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console? 6
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console? 110
console.log(additionSpread(1, 2, 3, 4, 100));
