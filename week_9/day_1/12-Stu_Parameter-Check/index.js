// It's done when I have created a file, `index.js`, in the working directory.
// It's done when I use `process.argv` to assign two arguments to variables.
// It's done when I compare those two variables to see whether they are the same or not.
// It's done if the program returns `true` when the values are the same and `false` if they are not. 

// const one = process.argv[2];
// const two = process.argv[3];

// if (one === two) {
   // console.log('true')
//}
// else {
  //  console.log('false')
//}

console.log(process.argv[2] === process.argv[3]);