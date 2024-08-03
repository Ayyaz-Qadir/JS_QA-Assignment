/******  Write a function that takes a string and returns it with the first letter of each word capitalized.  ******/

// let str = "ayyaz";

function capitalized(stentence) {

    let str = stentence.split(" "); // first it convet the sentence into array

    for (let i = 0; i < str.length; i++) {

        str[i] = str[i][0].toUpperCase() + str[i].slice(1); // it will take first latter do capitalize & the slice remove the first latter & add it
    }

    return str.join(" "); // at the end it will make santence
}

console.log(capitalized("ayyaz qadir"));
