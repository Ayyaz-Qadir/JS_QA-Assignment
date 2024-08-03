/******  Write a function that uses the filter method to remove all even numbers from an array.  ******/

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumberRemover(value){
    if(value%2 == 0){
        return false;
    }
    return value;
}

console.log(myArray.filter((element) => evenNumberRemover(element)));
