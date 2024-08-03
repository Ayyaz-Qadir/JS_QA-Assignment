/******  Write a function that uses map to extract the names of all users from an array of user objects (each user object contains name and age properties).  ******/

let myArray = [
    {
        name: "Ali",
        age: "22"
    },
    {
        name: "Haseeb",
        age: "29"
    },
    {
        name: "Haris",
        age: "32"
    },
    {
        name: "Afzal",
        age: "25"
    }
]

let newArray = []

function names(){
    newArray = myArray.map((value) => {
      return value.name;
    });
    console.log(newArray);
}

names();

