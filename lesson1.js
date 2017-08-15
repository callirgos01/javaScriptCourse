var createGreeting = function(message, name){
    return message + " " + name;
}

console.log(createGreeting("Hello", "Carlos"));


var arrowGreeting = message => message;

console.log(arrowGreeting("Hello Carlos"));


var squared = x => x * x;

console.log(squared(2));

