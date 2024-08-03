/******  Use the reduce method to calculate the sum of all elements in an array.  ******/

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const total = myArray.reduce((acc, value) => {
  return acc + value;
}, 0);

console.log(total);
