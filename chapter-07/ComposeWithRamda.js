const R = require('ramda');

const toUpper = (str) => str.toUpperCase();
const appendHi = (str) => str + 'hi'

const result = R.pipe(appendHi, toUpper)
console.log("Result",result('Hello'))//Result HELLOHI

const add = x => y => x + y; //currying;

const num1 = (x) => x + 1;
const num2 = (x) => x * 2;

const add3 = add(3);//patial application
let newMathFun = R.pipe(add3, num2, num1)
console.log("New Math Func", newMathFun(4)) //New Math Func 15