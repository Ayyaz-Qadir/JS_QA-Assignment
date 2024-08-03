/******  Write a function that returns the factorial of a number.  ******/

let num = 10, fact = 1;


function factorial(num) {
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}


console.log(factorial(num));

