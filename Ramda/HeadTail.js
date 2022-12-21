const R = require('ramda')

const list = [1, 2, 3, 4, 5]

console.log("Head", R.head(list));//Head 1
console.log('Tail', R.tail(list));//Tail [ 2, 3, 4, 5 ]
console.log('Tail', R.tail([]))//Tail []


const totalSum = (lst) => R.isEmpty(lst) ? 0 : R.head(lst) + totalSum(R.tail(lst))

console.log("Total Sum", totalSum(list))//Total Sum 15