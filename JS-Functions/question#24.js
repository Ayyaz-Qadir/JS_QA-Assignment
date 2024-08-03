/******  Write a function that takes another function as an argument and runs it after a specified delay.  ******/

function hello() {
    console.log("Hello!");
    console.log("Sorry! I'm late.");
    
}

setTimeout(hello, 3000);  // hello function will run after three second