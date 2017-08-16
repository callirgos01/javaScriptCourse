//Maps and WeakMaps with ES6

//maps ways to keep track of a key value pair
//no longer using objects to do this
//maps have methods to keep track of size

var myMap = new WeakMap();
//API
/*
* set();
* get();
* size;
* clear();
* has();
* */
var myObj = {};
var myFunc = function(){};

myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');
//myMap.set('string', 2);

console.log(myMap.get('foo'));
console.log(myMap.get('hello'));
console.log(myMap.get('noKey'));
console.log(myMap.size);

//myMap.clear();
//console.log(myMap.size);

console.log(myMap.has('foo'));
console.log(myMap.has('noKey'));

//iterators
/*
* keys();
* entries();
* values();
* */

for( var key of myMap.keys()){
    console.log(key);
}

for( var value of myMap.values()){
    console.log(value);
}

for( var [key, value] of myMap.entries()){
    console.log(key +' = '+value );
}

//weak maps
//no references being held to the keys of the maps
//allows it to be ready for automatic garbage collections.
//keys are not iteratable
//key types would be limited
//cant use string as keymap
//all iterator APIs are not available in weak maps