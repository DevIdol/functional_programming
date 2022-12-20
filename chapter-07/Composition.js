const toUpper = (str) => str.toUpperCase();
const appendHi = (str) => str + 'hi'

//imperative function
const appendHiAndtoUpper = (x) => toUpper(appendHi(x))
console.log("appendHiAndtoUpper:", appendHiAndtoUpper('hello')) //appendHiAndtoUpper: HELLOHI

//functional
const compose = (f, g) => (x) => f(g(x));
const newVersion = compose(toUpper, appendHi);
console.log("New Version:", newVersion('Hello')) //New Version: HELLOHI

const num01 = (x) => x + 1;
const num02 = (x) => x * 2;
const ResultOne = compose(num02, num01);
console.log("ResultOne:", ResultOne(3))//ResultOne: 8

const pipe = (f, g) => (x) => g(f(x));
const num1 = (x) => x + 1;
const num2 = (x) => x * 2;
const ResultTwo = pipe(num1, num2)
console.log("ResultTwo:", ResultTwo(3))//ResultTwo: 8

