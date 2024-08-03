/******  Write a function to update the properties of an object using another object.  ******/

let userData = {
  name: "Ayyaz",
  age: 36,
  location: {
    city: "Lahore",
    province: "Punjab",
  },
};

let updatedUserData = {
  name: "Ali",
  age: 22,
  location: {
    city: "Karachi",
    province: "Sindh",
  },
};

function updateData(userValues, updatedUserValues) {
  return {...userValues, ...updatedUserValues};
}

console.log(updateData(userData, updatedUserData));

