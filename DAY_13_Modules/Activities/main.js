// Task -1

export const add = (num1, num2) => {
  const ans = num1 + num2;
  return ans;
};

// Task-2

export const personDetails = {
  Fname: "Jon",
  Lname: "Doe",
  age: 30,
  FullName: function () {
    console.log(`The full name of user is ${this.Fname}  ${this.Lname}`);
  },
};

// Task-3

export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a - b;
export const divide = (a, b) => (b === 0 ? "Error: Division by zero" : a / b);

// Task-4

const add1 = (a, b) => a + b;

export default add1;
