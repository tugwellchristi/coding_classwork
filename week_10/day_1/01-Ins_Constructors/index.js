// Example dog object made from scratch. Writning 100 of these from scratch would take a long time.
// const dog = {
//   name: 'Rex',
//   age: 2,
//   breed: 'Bulldog'
// }

/*
  FUNCTION CONSTRUCTOR:
    - Create a blueprint for an object
    - returns a new object with the properties we provide when we call it
    - name should start with a capitial letter
    - 'this' keyword is the placeholder for the object that will returned
*/

// Constructor function can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
//function Dog(name, age, breed) {
  //this.name = name;
  //this.age = age;
  //this.breed = breed;
  //this.nap = function () {
    //console.log('Zzzzzzzzz');
  //};

//}

/*
- invoke with the 'new' keyword
- SYNTAX:
  const obj = new <function-constructor>(<paramOne>, <paramTwo>)
*/

// Sets the variable "dog" to a Dog object and initializes with name, age, and breed properties
//const dog = new Dog('Rex', 2, 'Bulldog');
//console.log(dog)

// Calling dog's nap method
// dog.nap();

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sleep = function() {
    console.log(`${this.name} is sleeping`);
  }
}

const mike = new Person("mike", 27);
const sarah = new Person("sarah", 28);

console.log(mike);
console.log(sarah);

mike.sleep();
sarah.sleep();