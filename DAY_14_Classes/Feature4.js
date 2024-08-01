/* Feature Request -> 4 :
    Getters ans Setters Script:
        - Create a script that uses getters and setters in a class.
*/

class Person {
  #firstName;
  #lastName;
  #age;

  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  get fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    if (newAge >= 0) {
      this.#age = newAge;
    } else {
      console.log("Age must be a non-negative number.");
    }
  }

  displayInfo() {
    console.log(`Name: ${this.fullName}, Age: ${this.age}`);
  }
}

const person = new Person("Vaibhav", "Jethava", 22);

console.log(`Initial full name: ${person.fullName}`);
console.log(`Initial age: ${person.age}`);

person.fullName = "Rutul Prajapati";
person.age = 22;

console.log(`Updated full name: ${person.fullName}`);
console.log(`Updated age: ${person.age}`);

person.age = -5;

person.displayInfo();
