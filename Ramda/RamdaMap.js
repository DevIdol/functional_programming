const R = require('ramda')
const double = x => x * 2;

let result = R.map(double, { x: 1, y: 2, z: 3 })
console.log("result:", result)//result: { x: 2, y: 4, z: 6 }

const students = [
  { name: "Mice", score: 82, gender: "Male" },
  { name: "Jule", score: 62, gender: "Femal" },
  { name: "Monica", score: 92, gender: "Femal" },
  { name: "John", score: 72, gender: "Male" },
  { name: "Paul", score: 68, gender: "Male" },
]

console.log("Names:", R.pluck("name", students))//Names: [ 'Mice', 'Jule', 'Monica', 'John', 'Paul' ]
console.log("Names:", R.map(R.prop('name'))(students))//Names: [ 'Mice', 'Jule', 'Monica', 'John', 'Paul' ]

//[name, gender]
let namesAndGender = (students) => [students.name, students.gender]

console.log("Name and Gender:", R.map(namesAndGender)(students))
/*
Name and Gender: [
  [ 'Mice', 'Male' ],
  [ 'Jule', 'Femal' ],
  [ 'Monica', 'Femal' ],
  [ 'John', 'Male' ],
  [ 'Paul', 'Male' ]
]
*/