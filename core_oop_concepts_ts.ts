//1. Classes
//Blueprints for creating objects with shared properties and behaviors.
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

const pawan = new User('Pawan');
pawan.greet(); // Hello, Pawan!

//2. Inheritance
//Child classes can inherit and extend the features of parent classes.

class Admin extends User {
  accessLevel: number = 10;

  override greet() {
    console.log(`Admin ${this.name}, level ${this.accessLevel}`);
  }
}

const admin = new Admin('Kumar');
admin.greet(); // Admin Kumar, level 10


//3. Encapsulation
//Control access to class members using public, private, and protected.

class Account {
  private balance: number = 1000;

  getBalance() {
    return this.balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }
}


//4. Polymorphism
//Objects can override or customize behavior using the same method name.

class Logger {
  log(message: string) {
    console.log(`Generic log: ${message}`);
  }
}

class FileLogger extends Logger {
  override log(message: string) {
    console.log(`Saving to file: ${message}`);
  }
}


//5. Abstraction
//Use abstract classes to define a contract for child classes

abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}


//🔧 TypeScript Superpowers for OOP
//Interfaces: Define structure and enforce type contracts.
//Generics: Build reusable components that work across types.
//Access Modifiers: Fine-tune visibility and protect logic.