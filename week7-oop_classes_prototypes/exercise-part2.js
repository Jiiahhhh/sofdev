// soal 1
class Circle {
  constructor(r) {
    this.r = r;
  }

  get area() {
    return Math.PI * this.r ** 2;
  }

  get circumference() {
    return 2 * Math.PI * this.r;
  }
}

const c = new Circle(5);
console.log(c.area);
console.log(c.circumference);

// Soal 2
class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (value < 0) throw new RangeError("Angka tidak boleh dibawah 0");
    this._price = value;
  }

  get priceFormatted() {
    return `Rp ${this._price.toLocaleString("id-ID")}`;
  }
}

const p = new Product("Laptop", 15000000);
console.log(p.price);
console.log(p.priceFormatted);

p.price = 20000000;
console.log(p.priceFormatted);

try {
  p.price = -1000;
} catch (e) {
  console.log(e.message);
}

// Soal 3
class ShoppingCart {
  constructor(items = []) {
    this.items = items;
  }

  addItem({ name, price, qty }) {
    this.items.push({ name, price, qty });
  }

  get total() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  get itemCount() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  }

  get isEmpty() {
    if (this.items.length === 0) return true;
    else return false;
  }
}

const cart = new ShoppingCart();
console.log(cart.isEmpty);
cart.addItem({ name: "Kopi", price: 20000, qty: 2 });
cart.addItem({ name: "Roti", price: 15000, qty: 1 });
console.log(cart.total);
console.log(cart.itemCount);
console.log(cart.items);
console.log(cart.isEmpty);
