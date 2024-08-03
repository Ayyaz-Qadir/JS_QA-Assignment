/******  Write a function that uses filter to get all the users older than 30 from an array of user objects.  ******/

let myArray = [
  {
    name: "Ali",
    age: 22,
  },
  {
    name: "Haseeb",
    age: 31,
  },
  {
    name: "Haris",
    age: 18,
  },
  {
    name: "Afzal",
    age: 55,
  },
  {
    name: "Nasir",
    age: 35,
  }
];

let newArray = []

function calcAge() {
    newArray = myArray.filter((object) => object.age > 30);
    console.log(newArray);
}
 
calcAge();