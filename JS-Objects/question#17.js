/******  Write a function that takes an object and returns an array of key-value pairs.  ******/

let obj = {
    name : "Haris Baig",
    age : 20,
    experince : "Two Years",
    occupation : "Freelancer",
}

function Key_Value_return(obj) {
    return Object.entries(obj);
} 

console.log(Key_Value_return(obj));

