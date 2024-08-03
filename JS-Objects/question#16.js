/******  Write a function that takes an object and returns an array of its values.  ******/

let obj = {
    name : "Ahmad",
    age : 44,
    experince : "four years",
}

let returnValue = (obj)=>{
    return Object.values(obj);
} 

console.log(returnValue(obj));

