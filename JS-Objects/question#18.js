/******  Write a function to deeply merge two nested objects.  ******/

let obj1 = {
  name: "Ayyaz",
  age: 36,
  location: {
    city: "Lahore",
    provence: "Punjab"
  }
};
let obj2 = { 1: "a", 2: "b" };

let merged = (obj1, obj2 )=> {
    // return {...obj1, ...obj2};
    return Object.assign(obj1, obj2);
}

console.log(merged(obj1, obj2));

