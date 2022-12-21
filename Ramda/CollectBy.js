const R = require('ramda')

const students = [
  { name: "Mice", score: 82, gender: "Male", city: "Kaly" },
  { name: "Jule", score: 62, gender: "Femal" , city: "Mandalay"},
  { name: "Monica", score: 92, gender: "Femal", city: "Yangon" },
  { name: "John", score: 72, gender: "Male" , city: "Mandalay"},
  { name: "Paul", score: 68, gender: "Male" , city: "Kaly"},
]

let studentWithSameCity = R.collectBy(R.prop('city'), students)
console.log('SameCity', studentWithSameCity)