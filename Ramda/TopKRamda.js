const R = require('ramda')
let k = 2
let arr = [3, 1, 2, 1, 3, 2, 1, 2]

const logX = x => console.log('X is', x);
const log = R.tap(logX)

/*
const result = R.groupBy(R.identity)(arr)
console.log("Result:", result) //Result: { '1': [ 1, 1, 1 ], '2': [ 2, 2, 2 ], '3': [ 3, 3 ] }

let countArrGroup = R.map((ele) => [ele[0], ele.length])(result)
console.log("CountArrGroup:", countArrGroup) //CountArrGroup: { '1': [ 1, 3 ], '2': [ 2, 3 ], '3': [ 3, 2 ] }

let countArr = R.values(countArrGroup)
let sortedCount = R.sort((a, b) => a[1] - b[1])(countArr)
console.log("Sorted Arr:", sortedCount) //Sorted Arr: [ [ 1, 2 ], [ 2, 3 ], [ 3, 3 ] ]

let topKFrequent = R.take(k)(sortedCount)
console.log("topKFrequent:", topKFrequent)//topKFrequent: [ [ 3, 2 ], [ 1, 3 ] ]

let finalResult = R.map(ele => ele[0])(topKFrequent)
console.log("final Result:", finalResult)//final Result: [ 3, 1 ]
*/
let topFrequentK = R.pipe(
  log,
  R.groupBy(R.identity),
  log,
  R.map(ele => [ele[0], ele.length]),
  log,
  R.values,
  log,
  R.sort((a,b) => a[1] - b[1]),
  log,
  R.take(k),
  R.map(ele => ele[0])
)

console.log("finalResult:", topFrequentK(arr)) //final Result: [ 3, 1 ]