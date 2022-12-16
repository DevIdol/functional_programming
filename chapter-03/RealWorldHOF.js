//predicate function
//====================
//(x)=> boolean 
const isEven = (x) => (x % 2) === 0; //Return Boolean

const every = (arr, func) => {
  let result = true;
  for (let i = 0; i < arr.length; i++)
    result = result && func(arr[i])
  return result;
}

let arr = [11, 22, 33, 44, 55]
let result = every(arr, isEven)
console.log("All Even: ", result)

console.log("==============================")

const some = (arr, func) => {
  let result = false;
  for(const value of arr)
    result = result || func(value)
    return result;
}

arr = [11, 22, 33, NaN, 44]
let someHaveNan = some(arr, isNaN)
console.log('Some have NaN:', someHaveNan)