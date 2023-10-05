// Prototype methods on constructor function
/*
  PROTOTYPE:
    - An object that is on every single object that gets created
    - Anything placed on the prototype object will be shared and accessible by other objects if they reference
    the same prototype property
*/
function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

Dog.prototype.nap = function () {
  console.log('Zzzzzzzzz');
};

const dog = new Dog('Rex', 2, 'Bulldog');
// Logging the dog object to show that in the browser, the nap method is now a prototype method and not a property of the object
console.log(dog);

//dog.nap();

