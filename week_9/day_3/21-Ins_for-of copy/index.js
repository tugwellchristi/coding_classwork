// 1. Using arrays
const songs = ['Bad Guy', 'The Wheels on the Bus', 'Friday'];
/*
  SYNTAX: FOR OF
    for (<variable> of <array>) {
      // code
    }
*/

for (const song of songs) {
  console.log(song);
}

/* Output:
  Bad Guy
  The Wheels on the Bus
  Friday
*/

// console.log('\n================================================\n');

// 2. Using multidimensional arrays
// const songChartPositions = [
//   ['Bad Guy', 1],
//   ['The Wheels on the Bus', 2],
//   ['Friday', 3],
// ];

// What type of data is at index 0?
// console.log(songChartPositions[0]);

// What type of data is at index 1 from the first value of multidimensional array?
// console.log(songChartPositions[0][1]);

// for of loop
// for (const song of songChartPositions) {
//   console.log(`${song[0]}'s chart position is ${song[1]}`);
// }

/* Output:
  Bad Guy's chart position is 1
  The Wheels on the Bus's chart position is 2
  Friday's chart position is 3
*/

/*
  ADVANTAGES:
    - Cleaner less code that we have to write compared to a for loop
    - Can be used on strings, unlike function loops: forEach etc, are only for arrays.
*/

/*
  DISADVANTAGES:
    - For of Loop has less control compared to a for loop. 
    - You don't have access to the index
      - Can't loop over every other items
      - Can't loop over an array backwards
*/