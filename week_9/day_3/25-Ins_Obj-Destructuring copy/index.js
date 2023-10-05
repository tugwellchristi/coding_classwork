/*
  OBJECT DESTRUCTURING
    - unpack properties from objects into variables
    - SYNTAX:
      const { properties } = <object-pulling-values-from>;
*/

const arya = {
  name: 'Arya Stark',
  parents: ['Eddard Stark', 'Catelyn Stark'],
};

const jaime = {
  name: 'Jaime Lannister',
  parents: ['Tywin Lannister', 'Joanna Lannister'],
};

// // In the past, if we wanted to pull off an object's property we'd have to do something like this:

const aryaName = arya.name;
const aryaParents = arya.parents;

console.log(aryaName); // logs `"Arya Stark"`
console.log(aryaParents); // logs `["Eddard Stark", "Catelyn Stark"]`

// Now with ES6 object destructuring syntax, we can do this:

// const { name, parents } = jaime;

// console.log(name); // logs `"Jaime Lannister"`
// console.log(parents); // logs `["Tywin Lannister", "Joanna Lannister"]`


/*
  RENAME VARIABLES:
    - We can also rename our destructured properties
  SYNTAX: 
    - const { <property-name>: <rename-property> } = <object-pulling-values-from>;
*/
// const { name: jaimeName } = jaime;
// console.log(jaimeName); // logs `"Jaime Lannister"`
// console.log(jaime); // jamie object is not modified

// We can also destructure parameters using the same feature. e.g. previously we might have done something like this:

// const logCharacter = (character) =>
//   console.log(
//     `${character.name}'s parents are: ${character.parents[0]} and ${character.parents[1]}.`
//   );

// logCharacter(arya);

// But now we can do this:

// const betterLogCharacter = ({ name, parents }) =>
//   console.log(`${name}'s parents are: ${parents[0]} and ${parents[1]}.`);

// betterLogCharacter(jaime);

/*
  DESTRUCTURE ARRAY:
    - Extract values from an array and set them to variables
    - Extracted values are based on position 
    - SYNTAX
      const [ positionOne, positionTwo ] = <array-to-extract-values>
*/

// const locations = ['Winterfell', 'Casterly Rock', 'Kings Landing'];

// Without ES6
// const winterfell = locations[0]
// const casterlyRock = locations[1]
// const  kingLanding = locations[2];

// With ES6 destructure 
// We can also use array destructuring to pull off an array's elements
// const [winterfell, casterlyRock, kingLanding] = locations;

// console.log(winterfell); // logs `"Winterfell"`
// console.log(casterlyRock); // logs `"Casterly Rock"`
// console.log(kingLanding); // logs `"Kings Landing"`


