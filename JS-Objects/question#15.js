/******  Write a function that takes an object and returns an array of its keys.  ******/

let obj1 = {
    name : "Ayyaz",
    age : 15,
    working : "un-employee"
}

function objKeyReturn(obj) {
    return  Object.keys(obj1);
}

console.log(objKeyReturn(obj1));

