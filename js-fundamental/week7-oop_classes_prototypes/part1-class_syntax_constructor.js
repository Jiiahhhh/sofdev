/* = = = = = = = = = =
 1. Classes
 Class adalah blueprint (cetak biru) untuk membuat object. Bayankan class seperti cetakan kue-dari satu cetakan, kita bisa buat banyak kue dengan bentuk yang sama tapi isiannya berbeda.
= = = = = = = = = = */

// Cara lama - function constructor
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   return `Halo, nama saya${this.name}`;
// };

// Cara modern - class syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Halo, nama saya ${this.name}`;
  }
}

/* = = = = = = = = = =
 2. Constructor
 Constructor adalah method spesial yang otomatis dipanggil saat object dibuat dengan new
= = = = = = = = = = */

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

const car1 = new Car("Toyota", "Avanza", 2022);
const car2 = new Car("Honda", "Civic", 2023);

console.log(car1.brand);
console.log(car2.model);

/* = = = = = = = = = =
 3. Methods
 Methods adalah fungsi yang ada di dalam class
= = = = = = = = = = */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  describe() {
    return `Persegi panjang ${this.width} x ${this.height}, luas = ${this.area()}`;
  }
}

const rect = new Rectangle(5, 3);
console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.describe());

/* = = = = = = = = = =
 4. toString()
 Convention umum di OOP - override toString() untuk representasi string dari object
= = = = = = = = = = */
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return `Person(${this.name}, ${this.age})`;
  }
}

const p = new Person2("Ilal", 25);
console.log(p.toString());
console.log(`${p}`);
