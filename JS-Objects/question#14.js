/******  Write a function to merge two objects.  ******/

let obj1 = {name1: "Ayyaz", age1: 34, occupation1: "Student"}

let obj2 = {name2: "Hafeez", age2: 55, occupation2: "Writer"}

const obj_merge = Object.assign( {} ,obj1, obj2 );
console.log(obj_merge);



// function merged() {
//   let obj1 = { 1: "a", 2: "b" };
//   let obj2 = { 3: "c", 4: "d" };

//   let obj_merge = { ...obj1, ...obj2 };
//   return obj_merge;
// }

// console.log(merged());
