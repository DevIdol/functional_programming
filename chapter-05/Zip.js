const zip = (leftArr, rightArr, fn) => {
    let index, results = [];
    for (index = 0; index < Math.min(leftArr.length, rightArr.length); index++)
        results.push(fn(leftArr[index], rightArr[index]))
    return results
}

const pare = (x, y) => [x, y];

let numbers = [1, 2, 3]
let strings = ["one", "two", "three"];

let result = zip(numbers, strings,pare)
console.log("Result", result) //Result [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]