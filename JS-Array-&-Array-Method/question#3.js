/******  Use the map method to create a new array that contains the square of each element in the original array.  ******/

const myArray = [11, 7, 23, 4, 9, 16, 7, 18, 8, 10];

const newArray = myArray.map((index) => index*index );

console.log(`New Array is: ${newArray}`);

