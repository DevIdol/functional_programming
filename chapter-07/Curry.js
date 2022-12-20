const R = require('ramda')
const add = (x, y) => x + y;

console.log("R.add:", R.add(3)(4)) //R.add: 7

const add3 = R.curry(add)(3);
console.log("Add3", add3(5)) //Add3 8