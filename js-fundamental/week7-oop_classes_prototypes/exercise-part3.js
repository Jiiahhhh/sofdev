// soal 1
class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  describe() {
    return `${this.year} ${this.brand} ${this.model}`;
  }

  age() {
    return new Date().getFullYear() - this.year;
  }
}

class Car extends Vehicle {
  constructor(brand, model, year, doors) {
    super(brand, model, year);
    this.doors = doors;
  }

  describe() {
    return `${this.year} ${this.brand} ${this.model} (${this.doors} pintu)`;
  }
}

const car = new Car("Toyota", "Avanza", 2022, 4);
console.log(car.describe());
console.log(car.age());
console.log(car instanceof Vehicle);

// Soal 2
class Shape {
  constructor(color) {
    this.color = color;
  }

  describe() {
    return `Bentuk berwarna ${this.color}`;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  describe() {
    return `Persegi panjang ${this.color} (${this.width}x${this.height}, luas: ${this.area})`;
  }
}

class Square extends Rectangle {
  constructor(color, size) {
    super(color, size, size);
    this.size = size;
  }

  describe() {
    return `Persegi ${this.color} (${this.size}x${this.size}, luas: ${this.area})`;
  }
}

const sq = new Square("biru", 4);
console.log(sq.area);
console.log(sq.describe());
console.log(sq instanceof Square);
console.log(sq instanceof Rectangle);
console.log(sq instanceof Shape);

// Soal 3
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getInfo() {
    return `Karyawan: ${this.name}, Gaji: Rp ${this.salary.toLocaleString("id-ID")}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  getInfo() {
    return `${super.getInfo()} | department: ${this.department}`;
  }
}

const mgr = new Manager("Ilal", 5000000, "Engineering");
console.log(mgr.getInfo());
