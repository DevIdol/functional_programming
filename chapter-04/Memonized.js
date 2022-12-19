const factorial = (n) => {
  console.log('Compute Factorial:', n)
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("Fact(3):", factorial(3))
// Compute Factorial: 3
// Fact(3): 6

console.log("Fact(3):", factorial(3))
// Compute Factorial: 3 <= Problem
// Fact(3): 6

const memonize = (fn) => {
  let lookupTable = {};
  return function (x) {
    if (lookupTable[x] !== undefined) {
      return lookupTable[x]
    } else {
      lookupTable[x] = fn(x)
      return lookupTable[x]
    }
  }
}


let newFec = memonize(factorial)
console.log("==========================")
console.log("Fact(3) ", newFec(3))
// Compute Factorial: 3
// Fact(3)  6
console.log("Fact(3) ", newFec(3))
// Fact(3)  6