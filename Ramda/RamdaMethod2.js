const R = require('ramda')

let obj = {
  address: "Somewhere",
  name: "Unknow",
  age: 20
};
let isKeyString = (value, key) => typeof value === 'string';
let objWithStringKey = R.pickBy(isKeyString)(obj)
console.log('object width String Key:', objWithStringKey)
//object width String Key: { address: 'Somewhere', name: 'Unknow' }

const abby = { name: "Abby", age: 7, hair: 'blond', grade: 2 };
const fred = { name: "Fred", age: 12, hair: 'brown', grade: 7 };

const kids = [abby, fred];

let result = R.project(['name', 'grade'])(kids)
console.log('Result:', result)//Result: [ { name: 'Abby', grade: 2 }, { name: 'Fred', grade: 7 } ]
