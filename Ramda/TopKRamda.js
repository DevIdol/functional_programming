const R = require('ramda')
let arr = [3, 1, 2, 1, 3, 2, 1, 2]

const result = R.groupBy(R.identity)(arr)
console.log("Result:", result) //Result: { '1': [ 1, 1, 1 ], '2': [ 2, 2, 2 ], '3': [ 3, 3 ] }

let countArr = R.map((ele) => [ele[0], ele.length])(result)
console.log("CountArr:", countArr) //CountArr: { '1': [ 1, 3 ], '2': [ 2, 3 ], '3': [ 3, 2 ] }