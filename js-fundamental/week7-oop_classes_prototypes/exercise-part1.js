// Soal 1
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  circumference() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `Circle(radius=${this.radius})`;
  }
}

const c = new Circle(5);
console.log(c.area());
console.log(c.circumference());
console.log(c.toString());

// Soal 2
class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Belum masukkan amount");
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      throw new Error("Error: Saldo tidak cukup");
    }
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }

  toString() {
    return `BankAccount(owner=${this.owner}, balance=${this.balance})`;
  }
}

const acc = new BankAccount("Ilal", 500000);
acc.deposit(100000);
console.log(acc.getBalance());
acc.withdraw(200000);
console.log(acc.getBalance());

try {
  acc.withdraw(999999);
} catch (e) {
  console.log(e.message);
}

// Soal 3
class Student {
  constructor(name, grades = []) {
    this.name = name;
    this.grades = grades;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  average() {
    return this.grades.reduce((s, n) => s + n, 0) / this.grades.length;
  }

  isPassing() {
    if (this.average() >= 60) {
      return true;
    } else {
      return false;
    }
  }

  toString() {
    return `Student(${this.name}, avg=${this.average()})`;
  }
}

const s = new Student("Ilal");
s.addGrade(80);
s.addGrade(90);
s.addGrade(85);
console.log(s.average());
console.log(s.isPassing());
console.log(`${s}`);

// Soal 4
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem({ name, price, qty }) {
    this.items.push({ name, price, qty });
  }

  removeItem(name) {
    this.items = this.items.filter((item) => item.name === name);
  }

  total() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  itemCount() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  }

  toString() {
    return `Cart(${this.itemCount()}, total: ${this.total()})`;
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Kopi", price: 20000, qty: 2 });
cart.addItem({ name: "Roti", price: 15000, qty: 3 });
console.log(cart.total());
console.log(cart.itemCount());
cart.removeItem("Kopi");
console.log(cart.total());
console.log(`${cart}`);
