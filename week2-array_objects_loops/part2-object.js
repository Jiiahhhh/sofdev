// Array: stores a LIST of similar things
const studentScores = [85, 92, 78, 95];

// Object: stores INFO about a single entity
const student = {
  // [key]   [value]
  name: "Ahmad Fauzi",
  nim: 2024001,
  major: "Informatics Engineering",
  ipk: 3.75,
  active: true,
};

// Access by dot notation
console.log(student.name);
console.log(student.ipk);

// bracket notation (for dynamic keys)
console.log(student["nim"]);

const key = "major";
console.log(student[key]);

const user = {
  name: "Siti",
  email: "siti@email.com",
};

// Add new property
user.age = 22;
user.city = "Makassar";
console.log(user);

// Change property
user.email = "siti.new@email.com";
console.log(user.email);

// Delete property
delete user.city;
console.log(user.city); // undefined

// Check if property exists
console.log("name" in user); // true
console.log("city" in user); // false

// Method inside an object
const calculator = {
  brand: "Casio",

  add: function (a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  info() {
    return `Kalkulator ${this.brand}`;
  },
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 4));
console.log(calculator.info());

// Object Destructuring
const product = {
  name: "Laptop",
  price: 8000000,
  stock: 15,
  kategori: "Electronic",
};

// Without destructuring - verbose
// const name = product.name;
// const price = product.price;

// With destructuring - mush shorter
const { name, price } = product;
console.log(name);
console.log(price);

// Rename while destructuring
const { name: productName = "Thing", price: productPrice = 0 } = product;
console.log(productName);
console.log(productPrice);

// Default value (if property doesn't exist in object)
const { discount = 0 } = product;
console.log(discount);

// SPREAD OPERATOR
const user2 = { name: "budi", age: 25 };

// Copy object (shallow copy)
const userCopy = { ...user2 };

// Merge objects (add property)
const userWithCity = { ...user2, city: "Makassar" };
console.log(userWithCity);

// Update property
const userUpdated = { ...user2, name: "Siti" };
console.log(userUpdated);

// OBJECT METHOD
const student2 = {
  name: "Rina",
  score: 95,
  class: "A",
};

// Object.keys() - get all keys
console.log(Object.keys(student2));

// Object.values() - get all values
console.log(Object.values(student2));

// Object.entries() - get [key, value] pairs
console.log(Object.entries(student2));

// Iterate all object properties
Object.entries(student2).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Real-world case: Store product management system
const store = {
  name: "Maju Electronics",
  city: "Makassar",
  products: [
    { id: 1, name: "ASUS Laptop", price: 7500000, stock: 5 },
    { id: 2, name: "Logitech Mouse", price: 250000, stock: 20 },
    { id: 1, name: "Mechanical Keyboard", price: 850000, stock: 8 },
  ],

  // Method to find a product
  findProduct(id) {
    return this.products.find((p) => p.id === id);
  },

  // Method to calculate total stock value
  totalStockValue() {
    return this.products.reduce((total, p) => total + p.price * p.stock, 0);
  },

  // Method to add a new product
  addProduct(newProduct) {
    const newId = this.products.length + 1;
    this.products.push({ id: newId, ...newProduct });
    console.log(`Product "${newProduct.name}" successfully added!`);
  },

  // Method to update stock
  updateStock(id, amount) {
    const product = this.findProduct(id);
    if (product) {
      product.stock += amount;
      console.log(`${product.name} stock updated: ${product.stock}`);
    } else {
      console.log("Product not found!");
    }
  },

  // Method to check low-stock products
  lowStock(minStock = 5) {
    return this.products.filter((p) => p.stock <= minStock);
  },
};

// Usage
console.log(`=== ${store.name} - ${store.city} ===`);
console.log("Find ID 2:", store.findProduct(2));
console.log(
  "Total stock value:",
  `Rp${store.totalStockValue().toLocaleString()}`,
);

store.addProduct({ name: "LG Monitor", price: 3200000, stock: 3 });
store.updateStock(1, -1);

const lowStockItems = store.lowStock();
console.log(
  "low stock products:",
  lowStockItems.map((p) => p.name),
);
