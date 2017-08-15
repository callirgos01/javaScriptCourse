//const declaration in es6
//use UPPER CASE for const (pretty standard)

var VALUE = 'hello world';
//BUT people can still mess with your consts
VALUE = 'foo bar';
console.log('value: ',VALUE);

//es6 introduces const declaration

const CONSTANT_VALUE = 'hello world, why not??'
//this would throw and exception
//CONSTANT_VALUE = 'foo bar'
console.log('const value: ', CONSTANT_VALUE);

const CONSTANT_REFERENCE = {};
CONSTANT_REFERENCE.foo = 'bar';

console.log('value: ',CONSTANT_REFERENCE);

//like let cosnt adhere to block declaration.

