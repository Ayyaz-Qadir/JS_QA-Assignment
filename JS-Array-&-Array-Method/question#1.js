/******  Write a function to find the maximum element in an array.  ******/

const myArray = [1, 27, 33, 46, 95, 66, 47, 8, 89, 10]
let max_num = 0;

function maximum() {
    myArray.forEach((element) => {
      if (element > max_num) {
        max_num = element;
      }
    });
    return console.log(`Muximum number is: ${max_num}`);
}

maximum();


