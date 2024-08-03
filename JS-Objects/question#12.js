/******  Create an object with property name, age, and occupation, and write a function to print each property and its value.  ******/

let obj = {
    name: "Ayyaz Qadir",
    age: 30,
    occupation: "Student"
}

function print(obj) {
    console.log(`Name : ${obj.name}`);
    console.log(`Age : ${obj.age}`);
    console.log(`Occupation : ${obj.occupation}`);
}

print(obj);

