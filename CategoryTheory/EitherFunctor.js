const toUpper = (str) => str.toUpperCase();
const appendHi = (str) => `${str} Hi`
const compose = (f, g) => x => f(g(x))

const toUpperAndAppendHi = compose(appendHi, toUpper)

const Nothing = function (val) {
    this.value = val;
};
Nothing.of = function (val) {
    return new Nothing(val);
}

Nothing.prototype.map = function (f) {
    return this;
}

const Some = function (val) {
    this.value = val;

};

Some.of = function (val) {
    return new Some(val);
}
Some.prototype.map = function (fn) {
    return Some.of(fn(this.value));
}

let something = Some.of('hello')
    .map(toUpper)

console.log('Something', something)

let nothing = Nothing.of('hello')
    .map(toUpper);
console.log('Nothing', nothing)

const Either = {
    Some: Some,
    Nothing: Nothing,
}

function div(a, b) {
    if (a == 0 && b == 0) {
        return Nothing.of("a & b is zero")
    } else {
        return Some.of(a / b)
    }
}
let incOne = (x) => x + 1;
let result = div(0, 0)
    .map(incOne);

console.log("Result", result)