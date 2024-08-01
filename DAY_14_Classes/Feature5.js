/* Feature Request -> 5 :
    Private Fields Script:
        - Write a script that defines a class with private fields and methods to manipulate these fields (optional).
*/

class BankAccount {
  #accountNumber;
  #balance;

  constructor(accountNumber, initialBalance = 0) {
    this.#accountNumber = accountNumber;
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

  viewBalance() {
    console.log(`Current balance: $${this.#balance}`);
  }
}

const myAccount = new BankAccount("123456789", 1000);

myAccount.viewBalance();

myAccount.deposit(500);

myAccount.withdraw(200);

myAccount.withdraw(1500);

myAccount.viewBalance();
