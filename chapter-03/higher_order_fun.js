const forEach = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

const print = (x) => console.log('Item is', x);
let arr = [11, 22, 33, 44, 55]
forEach(arr, print)

console.log("==============================")

const unless = (predicate, func) => {
  if (!predicate)
    func();
}

let k = 11;
unless(k % 2 === 0, () => console.log("It is odd number"))

console.log("==============================")

const times = (times, func) => {
  for (let i = 0; i < times; i++)
    func(i);
}

times(5, print)

console.log("==============================")

times(100, (n) => {
  unless(n % 2, () => console.log(n, "is even"));
})