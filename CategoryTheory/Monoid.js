const Sum = {
    empty: () => 0,
    concat: (x, y) => x + y
}

const arrSum = [1, 2, 3, 4, 5, 6].reduce(Sum.concat, Sum.empty())
console.log("Arr Sum:", arrSum) //Arr Sum: 21

var fold = function (array, monoid) {
    var accumulation = monoid.empty();                      // abstracted 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        accumulation = monoid.concat(accumulation, element) // abstracted +
    }
    return accumulation;
}

let total = fold([1, 3, 6], Sum)
console.log("Total:", total) //Total: 10

const Max = {
    empty: () => -Infinity,
    concat: (x, y) => x > y ? x : y
}

let max = fold([10, -100, 200, 4, 6, 1], Max)
console.log('Max:', max) //Max: 200