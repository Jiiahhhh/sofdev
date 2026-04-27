/* = = = = = = = = = =
 1. Extends & Super
= = = = = = = = = = */

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return `${this.name} berkata: ${this.sound}`;
  }

  toString() {
    return `Animal(${this.name})`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "Guk"); // panggil constructor parent
    this.tricks = [];
  }

  learnTrick(trick) {
    this.tricks.push(trick);
  }

  showTricks() {
    return `${this.name} bisa: ${this.tricks.join(", ")}`;
  }
}

const dog = new Dog("Rex");
console.log(dog.speak());
console.log(dog.showTricks());
dog.learnTrick("duduk");
dog.learnTrick("guling");
console.log(dog.showTricks());

/* = = = = = = = = = =
 2. Method Overriding
 Child class bisa override (menimpa) method dari parent:
= = = = = = = = = = */

class Animal2 {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return `Saya adalah hewan bernama ${this.name}`;
  }
}

class Cat extends Animal2 {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  // override method parent
  describe() {
    return `Saya kucing ${this.color} bernama ${this.name}`;
  }
}

const cat = new Cat("Mimi", "oranye");
console.log(cat.describe());

/* = = = = = = = = = =
 3. super.method()
 Bisa panggil method parent dari child dengan super.method()
= = = = = = = = = = */

class Animal3 {
  describe() {
    return `Hewan: ${this.name}`;
  }
}

class Dog2 extends Animal3 {
  describe() {
    return `${super.describe()}, jenis: Anjing`; // panggil parent + tambah info
  }
}

const dog2 = new Dog2("Rex");
// dog.name tidak diset - tapi tetap lanjut
console.log(dog2.describe()); // "Hewan: undefined, jenis: Anjing"

/* = = = = = = = = = =
 4. instanceof
 Cek apakah sebuah object adalah instance dari class tertentu.
= = = = = = = = = = */
const dog3 = new Dog("Rex");
console.log(dog3 instanceof Dog);
console.log(dog3 instanceof Animal);
console.log(dog3 instanceof Cat);
