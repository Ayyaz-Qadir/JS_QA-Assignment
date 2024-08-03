/******  Write a function to clone an object.  ******/

let obj1 = {
  name: "Ayyaz Qadir",
  age: 30,
  occupation: "Student",
};

let obj2 = {};

function clone() {
    obj2 = obj1
    return obj2   
}

console.log(clone());
