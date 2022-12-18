let k = 2;
let arr = [11, 22, 11, 11, 22, 33, 22, 33, 11]

let group = {}

group = arr.reduce((gp, element) => {
  return gp[element] ? (gp[element]++, gp) : (gp[element] = 1, gp)
  // if (gp[element]) {
  //   gp[element]++
  // } else {
  //   gp[element] = 1;
  // }
  // return gp;
}, {})

console.log("Group Arr: ", group) //Group Arr:  { '11': 4, '22': 3, '33': 2 }
let countArr = Object.entries(group);
console.log('Counted Arr: ', countArr) //Counted Arr:  [ [ '11', 4 ], [ '22', 3 ], [ '33', 2 ] ]

let firstFrequent = countArr.reduce((a, b) => (a[1] > b[1]) ? a : b)
console.log(firstFrequent) //[ '11', 4 ]

