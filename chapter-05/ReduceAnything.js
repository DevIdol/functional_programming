

let arr = [1, 3, 4, 7]

//reduce like map
const double = (x) => x * 2;

// const result = arr.reduce((arr, ele) => arr.concat(double(ele)), [])
const result = arr.reduce((arr, ele) => [...arr, double(ele)], []) //ES6

console.log("Result:", result) //Result: [ 2, 6, 8, 14 ]

//reduce like filter
const isEven = (x) => x % 2 == 0;

const evenList = arr.reduce((arr, ele) => isEven(ele) ? [...arr, ele] : arr, [])
console.log("EvenList", evenList) //EvenList [ 4 ]