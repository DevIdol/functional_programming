const R = require('ramda')

const byGroup = R.groupBy((student) => {
  const score = student.score;
  return score < 65 ? 'F' : score < 70 ? 'D' : score < 80 ? 'C' : score < 90 ? 'B' : 'A'
})

const students = [
  { name: "Mice", score: 82, gender: "Male" },
  { name: "Jule", score: 62, gender: "Femal" },
  { name: "Monica", score: 92, gender: "Femal" },
  { name: "John", score: 72, gender: "Male" },
  { name: "Paul", score: 68, gender: "Male" },
]
let result = byGroup(students);
console.log("Result by Score:", result)
/* 
Result by Score: {
  B: [ { name: 'Mice', score: 82, gender: 'Male' } ],
  F: [ { name: 'Jule', score: 62, gender: 'Femal' } ],
  A: [ { name: 'Monica', score: 92, gender: 'Femal' } ],
  C: [ { name: 'John', score: 72, gender: 'Male' } ],
  D: [ { name: 'Paul', score: 68, gender: 'Male' } ]
}
*/
const byGender = R.groupBy(students => students.gender)
result = byGender(students);
console.log("Result by Gender", result)
/* 
Result by Gender {
  Male: [
    { name: 'Mice', score: 82, gender: 'Male' },
    { name: 'John', score: 72, gender: 'Male' },
    { name: 'Paul', score: 68, gender: 'Male' }
  ],
  Femal: [
    { name: 'Jule', score: 62, gender: 'Femal' },
    { name: 'Monica', score: 92, gender: 'Femal' }
  ]
}
*/