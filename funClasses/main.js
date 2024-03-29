// Fun with ES6 Classes #2 - Animals and Inheritance
// Overview

// Preloaded for you in this Kata is a class Animal:

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// Task

// Define the following classes that inherit from Animal.
// I. Shark

// The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".
// II. Cat

// The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".

// Furthermore, the introduce/Introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase. For example:

// var example = new Cat("Example", 10, "Happy");
// example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important

// III. Dog

// The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".

// Dogs have an identical introduce/Introduce method as any other animal, but they have their own method called greetMaster/GreetMaster which accepts no arguments and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master).

// Get Coding :)

class Animal {
  constructor(name, age, status, legs, species) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age);
    this.status = status;
    this.legs = 0;
    this.species = "shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age);
    this.status = status;
    this.legs = 4;
    this.species = "cat";
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age);
    this.status = status;
    this.master = master;
    this.legs = 4;
    this.species = "dog";
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

var billy = new Shark("Billy", 3, "Alive and well");
console.log(billy.name); // "Billy"
console.log(billy.age); // 3
console.log(billy.legs); // 0
console.log(billy.species); // "shark"
console.log(billy.status); // "Alive and well"
console.log(billy.introduce()); // `Hello, my name is Billy and I am 3 years old.`

var charles = new Shark("Charles", 8, "Finding a mate");
console.log(charles.name); // "Charles"
console.log(charles.age); // 8
console.log(charles.legs); // 0
console.log(charles.species); // "shark"
console.log(charles.status); // "Finding a mate"
console.log(charles.introduce()); // `Hello, my name is Charles and I am 8 years old.`

var cathy = new Cat("Cathy", 7, "Playing with a ball of yarn");
console.log(cathy.name); // "Cathy"
console.log(cathy.age); // 7
console.log(cathy.legs); // 4
console.log(cathy.species); // "cat"
console.log(cathy.status); // "Playing with a ball of yarn"
console.log(cathy.introduce()); // "Hello, my name is Cathy and I am 7 years old.  Meow meow!"

var spitsy = new Cat("Spitsy", 6, "sleeping");
console.log(spitsy.name); // "Spitsy"
console.log(spitsy.age); // 6
console.log(spitsy.legs); // 4
console.log(spitsy.species); // "cat"
console.log(spitsy.status); // "sleeping"
console.log(spitsy.introduce()); // "Hello, my name is Spitsy and I am 6 years old.  Meow meow!"

var doug = new Dog("Doug", 12, "Serving his master", "Eliza");
console.log(doug.name); // "Doug"
console.log(doug.age); // 12
console.log(doug.legs); // 4
console.log(doug.species); // "dog"
console.log(doug.status); // "Serving his master"
console.log(doug.introduce()); // "Hello, my name is Doug and I am 12 years old."
console.log(doug.greetMaster()); // "Hello Eliza"
