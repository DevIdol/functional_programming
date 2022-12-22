const toUpper = (str) => str.toUpperCase();
const appendHi = (str) => `${str} Hi`
const compose = (f, g) => x => f(g(x))

const toUpperAndAppendHi = compose(appendHi, toUpper)
// console.log('toUpperAndAppendHi("undefined")', toUpperAndAppendHi(undefined))

const MayBe = (v) => ({
    value: v,
    isNothing: () => v === undefined || v === null,
    map: function (f) {
        return this.isNothing() ?
            MayBe.of(v)
            : MayBe(f(v));
    },
    valueOf: () => v
})

MayBe.of = (v) => MayBe(v);

const tokens = (str) => str.split(" ");
let str = "good morning"
// str = null;
// str = undefined

let result = MayBe.of(str).map(toUpperAndAppendHi).map(tokens);
console.log('Result Value:', result.value);//Result Value: GOOD MORNING Hi