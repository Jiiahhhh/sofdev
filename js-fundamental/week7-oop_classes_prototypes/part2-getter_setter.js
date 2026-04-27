/* = = = = = = = = = =
 1. Getter
 Getter diakses seperti property, bukan method (tidak perlu () )
= = = = = = = = = = */

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  // getter - diakses seperti property
  get fahrenheit() {
    return (this.celsius * 9) / 5 + 32;
  }

  get kelvin() {
    return this.celsius + 273.15;
  }
}

const temp = new Temperature(100);
console.log(temp.fahrenheit);
console.log(temp.kelvin);

/* = = = = = = = = = =
 2. Setter
 Setter dipakai untuk validasi saat mengubah nilai property
= = = = = = = = = = */

class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age; // convention: _ di depan = "private" (by convention)
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (typeof value !== "number") throw new TypeError("Age harus number");
    if (value < 0 || value > 120) throw new RangeError("Age harus 0-120");
    this._age = value;
  }
}

const p = new Person("Ilal", 25);
console.log(p.age); // 25 - pakai getter

p.age = 30; // pakai setter
console.log(p.age); // 30

try {
  p.age = -5; // RangeError!
} catch (e) {
  console.log(e.message);
}

/* = = = = = = = = = =
 3. Getter sebagai Computed Property
 Getter berguna untuk property yang dihitung dari property lain
= = = = = = = = = = */
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  get isSquare() {
    return this.width === this.height;
  }
}

const rect = new Rectangle(5, 5);
console.log(rect.area);
console.log(rect.isSquare);
