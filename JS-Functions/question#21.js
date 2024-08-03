/******  Write a function to check if a number is prime.  ******/

let num = 11;

let prime = (num)=> {

    if(!(num%2 == 0) && !(num%3 == 0)){

        return `Prime number: ${num}`

    } else if (num/2 == 1){

        return `Prime number: ${num}`;   

    } else if (num/3 == 1){

        return `Prime number: ${num}`;  

    } else {

        return `Not Prime number: ${num}`;  
    }
}

console.log(prime(num));

