/* Feature Request -> 2 :
    Counter Closure Script:
        - Create a script that uses a closure to maintain a private counter with increment and get functions.
*/

const createCounter = () => {
  let counter = 0;

  const increment = () => {
    counter++;
  };

  const getCounter = () => {
    return counter;
  };

  return {
    increment,
    getCounter,
  };
};

const counter = createCounter();

counter.increment();
counter.increment();

console.log(counter.getCounter());

counter.increment();

console.log(counter.getCounter());
