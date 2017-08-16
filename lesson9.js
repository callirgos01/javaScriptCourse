//Destructoring


function generateObject() {
    return {
        name: "John",
        state:"New York",
        color: "blue",
        position: "Forward"
    }
}

//console.log(color);
//console.log(position);

var {name:firstName, state:location} = generateObject();


console.log(firstName);
console.log(location);


var [first,,,,fifth] = ["red", "yellow", "green", "blue", "orange"];

console.log(first);
console.log(fifth);

