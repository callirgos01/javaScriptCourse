//object enhancement

var color = "red";
var speed = 10;

var car = {
    color,
    speed,
    ["go"]: () => console.log("vroom")
};
console.log(car.color);
console.log(car.speed);

car.go();
