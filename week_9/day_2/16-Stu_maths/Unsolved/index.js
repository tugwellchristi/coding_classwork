// TODO: Import `maths.js`
const maths = require('./maths');
console.log(maths);

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];
const numOne = parseInt(process.argv[3]);
const numTwo = parseInt(process.argv[4]);

console.log("operation is ", operation);
console.log("numOne is ", numOne);
console.log("numTwo is", numTwo);

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

switch (operation) { // comparison
    case "sum":
        // if case matches run code
        console.log(maths.sum(numOne, numTwo))
        break;
    case "difference":
        console.log(maths.difference(numOne, numTwo))
        break;
    case "quotient":
        console.log(maths.quotient(numOne, numTwo))
        break;
}