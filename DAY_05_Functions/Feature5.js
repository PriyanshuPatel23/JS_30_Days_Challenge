/* Feature Request -> 5 :
    Higher-Order Function Script:
        - Write a script that includes higher-order function to apply a given function multiple times.
*/

function applyFunc(fn1, fn2, value) {
  return fn2(fn1(value));
}

const mul = (x) => x * 2;

const add = (x) => x + 5;

let af = applyFunc(add, mul, 5);
console.log(af);
