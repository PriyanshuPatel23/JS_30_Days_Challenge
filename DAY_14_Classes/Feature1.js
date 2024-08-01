/* Feature Request -> 1 :
    Basic Class Script:
        - Write a script that defines a 'person' class with properties and methods, creates instances and logs messages.
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

const person1 = new Person("Vaibhav", "Jethava", 22);
const person2 = new Person("Rutul", "Prajapati", 22);

console.log(`Person 1 full name: ${person1.fullName}`);
console.log(person1.getGreeting());

console.log(`Person 2 full name: ${person2.fullName}`);
console.log(person2.getGreeting());

person1.fullName = "Priyanshu Patel";
console.log(`Updated Person 1 full name: ${person1.fullName}`);
console.log(person1.getGreeting());

console.log(Person.getGenericGreeting());
