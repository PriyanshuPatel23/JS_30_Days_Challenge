/* Activity -> 1 : For Loop */

// Task_1 - Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task_2 - Write a program to print the multiplication table of 5 using a for loop.

let num1 = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${num1} x ${i} = ${num1 * i}`);
}

/* Activity -> 2 : While Loop */

// Task_3 - Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let counter = 0;
let i = 1;

while (i <= 10) {
  counter += i;
  i++;
}

console.log(`The sum of numbers from 1 to 10 is ${counter}`);

// Task_4 - Write a program to print numbers from 10 to 1 using while loop.

let j = 10;
let result1 = "";

while (j >= 1) {
  result1 += j + (j > 1 ? " " : "");
  j--;
}

console.log(`The numbers : ${result1}`);

/* Activity -> 3 : Do...While Loop */

// Task_5 - Write a program to print numbers from 1 to 5 using a do...while loop.

let num = 1;

do {
  console.log(num);
  num++;
} while (num <= 5);

// Task_6 - Write a program to calculate the factorial of number using a do...while loop.
let num2 = 10;
let factorial = 1;

do {
  factorial *= num2;
  num2--;
} while (num2 > 0);

console.log(factorial);

/* Activity -> 4 : Nested Loops */

// Task_7 - Write a program to print a pattern using nested for loops.

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(" *");
  }
  console.log(" ");
}

/* Activity -> 5 : Loop Control Statements */

// Task_8 - Write a program to print numbers from 1 to 10, but skip the number 5 using the 'continue' statement.

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

// Task_9 - Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the 'break' statement.

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
