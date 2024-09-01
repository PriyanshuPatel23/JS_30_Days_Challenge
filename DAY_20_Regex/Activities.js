/* Activity -> 1 : Basic Regular Expressions */

// Task_1 - Write a regular expression to match a simple pattern (e.g., match all occurences of the word "JavaScript" in a string). Log the matches.

// Sample string

const sampleString = "I love JavaScript. JavaScript is a versatile language.";

// Regular expression to match all occurrences of "JavaScript"
const regex = /JavaScript/g;

// Find all matches
const matches = sampleString.match(regex);

// Log the matches
console.log(matches); // [ 'JavaScript', 'JavaScript' ]

// Task_2 - Write a regular expression to match all digits in a string. Log the matches.

// Sample string

const sampleString1 = "The year is 2024 and the time is 12:15 PM.";

const regex1 = /\d+/g;

const matches1 = sampleString1.match(regex1);

console.log(matches1);

/* Activity -> 2 : Character Classes and Quantifiers */

// Task_3 - Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

// Sample string

const sampleString2 = "JavaScript is a versatile language. I love Python.";

const regex2 = /\b[A-Z][a-zA-Z]+\b/g;

const matches2 = sampleString2.match(regex2);

console.log(matches2);

// Task_4 - Write a regular expression to match all sequence of one or more digits in a string. Log the matches.

// Sample string

const sampleString3 = "The year is 2024 and the time is 12:15 PM.";

const regex3 = /\d+/g;

const matches3 = sampleString3.match(regex3);

console.log(matches3);

/* Activity -> 3 : Grouping and Capturing */

// Task_5 - Write a regular expression to capture the area code, central office code and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

// Sample phone number

const phoneNumber = "(123) 456-7890";

const regex5 = /(\(\d{3}\))\s(\d{3})-(\d{4})/;

const captures = phoneNumber.match(regex5);

// Log the captures
if (captures) {
  const areaCode = captures[1];
  const centralOfficeCode = captures[2];
  const lineNumber = captures[3];
  console.log(`Area Code : ${areaCode}`);
  console.log(`Central Office Code : ${centralOfficeCode}`);
  console.log(`Line Number : ${lineNumber}`);
} else {
  console.log("No matches found.");
}

// Task_6 - Write a regular expression to capture the username and domain from an email address. Log the captures.
// Sample email address
const email = "user@example.com";

// Regular expression to capture the username and domain
const regex6 = /^([^@]+)@([^@]+)$/;

// Use the exec method to find matches and capture groups
const matches5 = regex6.exec(email);

// Log the captures
if (matches5) {
  const username = matches5[1];
  const domain = matches5[2];
  console.log(`Username : ${username}`);
  console.log(`Domain : ${domain}`);
} else {
  console.log("No matches found.");
}

// Task_7 - Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

// Sample string

const sampleString4 = "JavaScript is a versatile language. I love Python.";

const regex4 = /^\w+/g;

const matches4 = sampleString4.match(regex4);

if (matches4) {
  console.log(`Matched word at the beginning of the string : ${matches4[0]}`);
} else {
  console.log("No matches found.");
}

// Task_8 - Write a regular expression to match a word only if it is at the end of a string. Log the matches.

// Sample string

const sampleString5 =
  "JavaScript is a easy language to read and write JavaScript applications that are designed";

const regex8 = /\b\w+\b$/g;

const matches8 = sampleString5.match(regex8);

if (matches8) {
  console.log(`Matched word at the end of the string : ${matches8[0]}`);
} else {
  console.log("No matches found.");
}

/* Activity -> 5 : Practical Applications */

// Task_9 - Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit and one special character). Log whether the password is valid.

// Sample passwords
const password1 = "Password123!";
const password2 = "password123";
const password3 = "PASSWORD123!";
const password4 = "Password!";

const regex9 =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

// Function to validate the password
function validatePassword(password) {
  if (regex9.test(password)) {
    console.log(`Password "${password}" is valid.`);
  } else {
    console.log(`Password "${password}" is invalid.`);
  }
}

// Test the sample passwords
validatePassword(password1); // Should be valid
validatePassword(password2); // Should be invalid
validatePassword(password3); // Should be invalid
validatePassword(password4); // Should be invalid

// Task_10 - Write a regular expression to validate a URL. Log whether the URL is valid.

// Sample URLs
const url1 = "https://www.example.com";
const url2 = "http://example.com";
const url3 = "www.example.com";
const url4 = "example.com";
const url5 = "https://example";

const regex10 = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

// Function to validate the URL
function validateURL(url) {
  if (regex9.test(url)) {
    console.log(`URL "${url}" is valid.`);
  } else {
    console.log(`URL "${url}" is invalid.`);
  }
}

// Test the sample URLs
validateURL(url1); // Should be valid
validateURL(url2); // Should be valid
validateURL(url3); // Should be valid
validateURL(url4); // Should be valid
validateURL(url5); // Should be invalid
