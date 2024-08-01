/* Feature Request -> 2 :
    Class Inheritance Script:
        - Create a script that defines a 'student' class extending 'person',overrides methods and logs the results.
*/

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getGreeting() {
    return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
  }

  static getGenericGreeting() {
    return "Hello, this is a generic greeting message.";
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, studentId) {
    super(firstName, lastName, age);
    this.studentId = studentId;
  }

  getGreeting() {
    return `Hello, my name is ${this.fullName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

const student1 = new Student("Vaibhav", "Jethava", 22, "SID12345");
const student2 = new Student("Rutul", "Prajapati", 22, "SID67890");

console.log(`Student 1 full name: ${student1.fullName}`);
console.log(student1.getGreeting());

console.log(`Student 2 full name: ${student2.fullName}`);
console.log(student2.getGreeting());

student1.fullName = "Priyanshu Patel";
console.log(`Updated Student 1 full name: ${student1.fullName}`);
console.log(student1.getGreeting());

console.log(Person.getGenericGreeting());
