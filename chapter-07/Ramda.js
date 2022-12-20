const R = require('ramda')

const equals3 = R.equals(3);
let arr = [3, 3, 3]

console.log("AllEquals3", R.all(equals3, arr)) //AllEquals3 true

//lt = (a, 0)
//flip = (0, a)

const lessThan0 = R.flip(R.lt)(0)
const lessThan2 = R.flip(R.lt)(2)

console.log("less than 0:", R.any(lessThan0)([1,2]))//less than 0: false
console.log("less than 2:", R.any(lessThan2)([1,2]))//less than 2: true

const apply = R.ap([R.multiply(2), R.add(3)], [1,2,3])
console.log("Apply:", apply)//Apply: [ 2, 4, 6, 4, 5, 6 ]