/* Feature Request -> 5 :
    Memoization Script:
        - Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.
*/

const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
};

const factorial = memoize((n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
});

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(7));
