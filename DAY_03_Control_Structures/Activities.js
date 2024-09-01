/* Activity -> 1 : If-Else Statements */

// Task_1 - Write a program to check if a number is positive, negative, or zero and log the result to the console.

let num1 = 10;

if (num1 > 0) {
  console.log("The number is Positive");
} else if (num1 < 0) {
  console.log("The number is Negative");
} else {
  console.log("The number is Zero");
}

// Task_2 - Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 17;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

/* Activity -> 2 : Nested If-Else Statements */

// Task_3 - Write a program to find the largest of three numbers using nested if-else statement.

let num2 = 5;
let num3 = 10;
let num4 = 8;

if (num2 >= num3) {
  if (num2 >= num4) {
    console.log(`The Highest number is ${num2}`);
  } else {
    console.log(`The number ${num4} is highest`);
  }
} else {
  if (num3 >= num4) {
    console.log(`The number highest is ${num3}`);
  } else {
    console.log(`the number highest is ${num4}`);
  }
}

/* Activity -> 3 : Switch case */

// Task_4 - Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 7;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
    break;
}

// Task_5 - Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

let score = 85;

switch (true) {
  case score >= 90:
    console.log("Grade: A");
    break;
  case score >= 80:
    console.log("Grade: B");
    break;
  case score >= 70:
    console.log("Grade: C");
    break;
  case score >= 60:
    console.log("Grade: D");
    break;
  default:
    console.log("Invalid Marks");
    break;
}

/* Activity -> 4 : Conditional (Ternary) Operator */

// Task_6 - Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let num5 = 10;

let result = num5 % 2 === 0 ? "Even" : "Odd";
console.log(`The num5 is an ${result} number`);

/* Activity -> 5 : Combining Conditions */

// Task_7 -Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2023;

if ((year % 4 === 0 && year % 100 !== 0) || year % 4 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
