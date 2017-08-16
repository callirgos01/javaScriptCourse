//Generators

function *graph(n){
    const infinite = !n && n !== 0;
    let x =0;
    let y = 0;
    while(infinite || n--){
        yield { x:x, y:y }
        x += 2;
        y += 1;
    }
}
var graphGenerator = graph();

let [,,,,...first19] = graph(30);
console.log(first19);