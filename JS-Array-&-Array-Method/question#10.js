/******  Use filter and map together to get an array of names of users older than 30 from an array of user objects.  ******/

let myArray = [
  {
    name: "Ali",
    age: 41,
  },
  {
    name: "Haseeb",
    age: 29,
  },
  {
    name: "Haris",
    age: 32,
  },
  {
    name: "Afzal",
    age: 25,
  },
];

let newArray = []

newArray = myArray.filter((obj) => obj.age > 30).map((obj) => obj.name);

console.log(newArray);

