/* Feature Request -> 1 :
    Basic Closure Script:
        - Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.
*/

const outerFunction = () => {
  let outerVariable = "I am from the outer function";

  const innerFunction = () => {
    return outerVariable;
  };

  return innerFunction;
};

const myInnerFunction = outerFunction();
console.log(myInnerFunction());
