const R = require('ramda')
const double = x => x * 2;                          

let result = R.map(double, { x: 1, y: 2, z: 3 })
console.log("result:", result)//result: { x: 2, y: 4, z: 6 }

