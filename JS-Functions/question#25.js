/******  Write a function that takes an array of numbers and returns a new array with each element doubled, but only if the original element was greater than 10.  ******/

let array = [12, 20, 3, 4, 11, 6, 7, 13, 9, 10]

function update(array) {
    for (let i = 0; i < array.length; i++) {

        if(array[i] > 10){

           array[i] = array[i] * array[i];

        }else{

            array[i];

        }

    }
    return array
}

console.log(update(array));
