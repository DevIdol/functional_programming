/* 
Functor 
    Container
    Wrapper
    map -> Container(fn(counter value))
 */

const Functor = (v) => ({
    value: v,
    map: (f) => Functor(f(v)),
    valueOf: () => v,
});
Functor.of = (v) => Functor(v);

const compose = (f, g) => (x) => f(g(x));

const identity = (x) => x;
let counter = Functor.of(1);

let double = (x) => x * 2;
let incOne = (x) => x + 1;

let newFunc = compose(incOne, double)
let doubleCount = counter.map(double).map(incOne);

console.log("Counter:", counter);
console.log("DoubleCount:", doubleCount);

let idFunctor = counter.map(identity)
console.log('Law 1', counter.value == idFunctor.value);//Law 1 true

let afterCompose = counter.map(newFunc);
console.log('AfterCompose', doubleCount.value == afterCompose.value)//AfterCompose true
