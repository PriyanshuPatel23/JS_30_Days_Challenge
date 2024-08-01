/* Activity -> 1 : Class Definition */

// Task_1 - Define a class 'person' with properties 'name','age' and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const john = new Person("John Doe", 30);
console.log(john.greet());

// Task_2 - Add a method to the 'person' class that updates the age property and logs the updated age.

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  updateAge(newAge) {
    this.age = newAge;
    console.log(`${this.age}`);
  }
}

const jane = new Person1("Jane", 22);
console.log(jane.greet());

jane.updateAge(30);

/* Activity -> 2 : Class Inheritance */

// Task_3 - Define a class 'student' that  extends the person class. Add a property 'studentId' and a method to return the student ID. create an instance of the 'student' class and log the student ID.

class student extends Person1 {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return this.studentId;
  }
}

const joe = new student("joe", 22, "A25");
console.log(joe.getStudentId());

// Task_4 - Override the greeting method in the 'student' class to include the student ID in the message. Log the overridden greeting message.

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  updateAge(newAge) {
    this.age = newAge;
    console.log(`${this.age}`);
  }
}

class student1 extends Person2 {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return this.studentId;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old My SID is ${this.studentId}.`;
  }
}

const joe1 = new student1("joe", 22, "A25");
console.log(joe1.greet());

/* Activity -> 3 : Static Methods and Properties */

// Task_5 - Add a static method to the 'person' class that returns a generic greeting message. Call this static method without creating an instance of class and log the message.

class Person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static greet() {
    return "Hello, I am a generic person.";
  }
}

console.log(Person3.greet());

// Task_6 - Add a static property to the 'student' class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Person4 {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  static greet() {
    return "Hello, I am a generic person.";
  }
}

class Student2 extends Person4 {
  static totalStudents = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student2.totalStudents++;
    console.log(`${Student2.totalStudents}`);
  }
  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old. My SID is ${this.studentId}`;
  }
}

const student2 = new Student2("Jane", 21, "SID123");
const student3 = new Student2("Joe", 21, "SID12345");

console.log(student2.getGreeting());
console.log(student3.getGreeting());

/* Activity -> 4 : Getters and Setters */

// Task_7 - Add a getter method to the 'person' class to return the full name (assume a  firstName and lastName property). Create an instance and log the full name using the getter.

class Person6 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getName() {
    return `First name is ${this.firstName} lastname is ${this.lastName}`;
  }
}

const personInstance = new Person6("Laila", "leigh");

console.log(personInstance.fullName);
console.log(personInstance.getName());

// Task_8 - Add a setter method to the 'person' class to update the name properties (firstName and lastName) Update the name using the setter and log the updated full name.

class Person7 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set setName(newName) {
    const [firstName, lastName] = newName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const personInstance1 = new Person7("Laila", "leigh");

console.log(personInstance1.fullName);

personInstance1.setName = "Jhonny Sins";

console.log(personInstance1.fullName);

/* Activity -> 5 : Private Fields (Optional) */

// Task_9 - Define a class 'Account' with private fields for 'balance' and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Accounts {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(
        `The deposited amount is ${amount} and total balance is ${
          this.#balance
        }`
      );
    } else {
      console.log("Invalid deposit amount");
    }
  }

  withdraw(amount) {
    if (amount > 0 || amount <= this.#balance) {
      this.#balance -= amount;
      console.log(
        `The withdrawn amount is ${amount} and total balance is ${
          this.#balance
        }`
      );
    } else {
      console.log("invalid withdrawal amount");
    }
  }

  total() {
    return this.#balance;
  }
}

const balance = new Accounts();

balance.deposit(1000);

balance.withdraw(600);

console.log(balance.total());

// Task_10 - Create an instance of the 'Account' class and test the deposit and withdraw methods, logging the balance after each operation.

class Account1 {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Insufficient balance or invalid withdrawal amount.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount1 = new Account1(100);

console.log(`Initial balance: $${myAccount1.getBalance()}`);

myAccount1.deposit(50);
console.log(`Balance after deposit: $${myAccount1.getBalance()}`);

myAccount1.withdraw(30);
console.log(`Balance after withdrawal: $${myAccount1.getBalance()}`);

myAccount1.withdraw(150);
console.log(
  `Balance after attempting to overdraw: $${myAccount1.getBalance()}`
);

console.log(`Final balance: $${myAccount1.getBalance()}`);
