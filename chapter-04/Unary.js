let arr = [2, 4, 6].map(a => a * a)
console.log("Arr: ", arr)


console.log("==========================")

const mapDisplay = function () {
    console.log("Arguments: ", arguments);
    return arguments[0]
}

let arr2 = ["2", "4", "6"];

// Probram
// parseInt(string, radix) 
// 2 => ("2", 0) 2
// 4 => ("4", 1) NaN
// 6 => ("6", 2)
let result = arr2.map(parseInt); 
console.log("Result: ", result) //Result:  [ 2, NaN, NaN ]
//Solving with Unary
const unary = (fn) =>
    fn.length === 1 ? fn : (args) => fn(args)

 result = arr2.map(unary(parseInt))

console.log("Result: ", result) //Result:  [ 2, 4, 6 ]
arr2.map(mapDisplay)