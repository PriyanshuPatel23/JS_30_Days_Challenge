/* Feature Request -> 3 :
    Static Methods and Properties Script:
        - Write a script that demonstrates static methods and properties in classes.
*/

class Calculator {
  static pi = 3.14159;

  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }
}

const sum = Calculator.add(10, 5);
console.log(`Sum: ${sum}`);

const difference = Calculator.subtract(10, 5);
console.log(`Difference: ${difference}`);

const product = Calculator.multiply(10, 5);
console.log(`Product: ${product}`);

const quotient = Calculator.divide(10, 5);
console.log(`Quotient: ${quotient}`);

console.log(`Value of pi: ${Calculator.pi}`);
