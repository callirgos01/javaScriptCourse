
//default values
function greet(greeting, name="John"){
    console.log(greeting + ", " + name);
}

greet();
greet("Hello");
greet("Hello", "Bill");

function receive(complete=() => console.log("complete"))
{
    complete();
}

receive();

let receive2 = (complete = () => console.log("complete2")) => complete();

receive2();
