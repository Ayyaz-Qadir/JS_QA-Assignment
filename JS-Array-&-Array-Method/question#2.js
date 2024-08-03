/******  Write a function to reverse an array without using the built-in reverse method.  ******/

const myArray = [1, 27, 33, 46, 95, 66, 47, 8, 89, 10];
let rev_arr = [];

function reverseArray() {
    for (let i = myArray.length-1; i >=0 ; i < i--) {
        rev_arr.push(myArray[i]);
    }
    return console.log(`Reverse Array is: ${rev_arr}`);
}

reverseArray();