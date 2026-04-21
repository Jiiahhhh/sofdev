/* = = = = = = = = = =
 1. Pure Functions
= = = = = = = = = = */
console.log("=== PURE FUNCTIONS ===");

// Pure function
// - input same numbers -> always same result
// - does not touch anything outside
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 - always the same

// Impure function
// - result depends on external variable `texRate`
// - if texRate changes, same input gives different output
let taxRate = 0.1;

function calculatePrice(price) {
  return price + price * taxRate;
}

console.log(calculatePrice(100000));
taxRate = 0.2;
console.log(calculatePrice(100000));

// Pure version
// - taxRate is now a parameter, not an external variable
// - same inputs will always produce the same output
function calculatePrice2(price, taxRate) {
  return price + price * taxRate;
}

console.log(calculatePrice2(100000, 0.1));
console.log(calculatePrice2(100000, 0.1));

/* = = = = = = = = = =
 2. Side Effects
 = = = = = = = = = = */
console.log("=== SIDE EFFECT ===");

// 1. Modifying an external variable - side effect
let count = 0;

function increment() {
  count++; // modifies variable outside the function
}

increment();
console.log(count);

// 2. console.log - side effect (writes to the outside world)
function greet(name) {
  console.log("Hello, " + name); // side effect: writes to console
  // this function has no return value
}

// 3. Writing to localStorage - side effect
function saveUsername(name) {
  localStorage.setItem("username", name); // side effect: touches browser storage
}

// 4. Modifying a DOM element - side effect
function showError(message) {
  document.getElementById("error").textContent = message; // side effect: changes the DOM
}

// 5. Making an API call - side effect
function fetchUser(id) {
  fetch("/api/users/" + id); // side effect: network request
}

// BAD - mixing data processing with side effect
function processAndSave(students) {
  const passing = students.filter((s) => s.grade >= 60); // data processing
  //   localStorage.setItem("passing", JSON.stringify(passing)); // side effect mixed in
  return passing;
}

// GOOD - separated concerns
// Pure function: only processes data, no side effects
function getPassingStudent(students) {
  return students.filter((s) => s.grade >= 60);
}

// // Impure function: handles the side effect separately
// function saveToStorage(key, data) {
//   localStorage.setItem(key, JSON.stringify(data));
// }

let students = [];
// Usage - side effect is explicit and isolated
const passing = getPassingStudent(students);
// saveToStorage("passing", passing);

/* = = = = = = = = = =
 3. Immutability
= = = = = = = = = = */
console.log("=== IMMUTABILITY ===");

// Mutating an array directly - dangerous
const fruits = ["apple", "banana", "mango"];

function addFruit(arr, fruit) {
  arr.push(fruit); // modifies the original array
  return arr;
}

const newFruits = addFruit(fruits, "orange");
console.log(fruits); // original changed
console.log(newFruits);
console.log(fruits === newFruits);

// Immutable approach - always create new data
const fruits2 = ["apple", "banana", "mango"];
function addFruit2(arr, fruit) {
  return [...arr, fruit];
}

const newFruits2 = addFruit2(fruits2, "orange");
console.log(fruits2);
console.log(newFruits2);
console.log(fruits2 === newFruits2);

// Mutating an object directly - dangerous
const user = { name: "Ilal", age: 25, city: "Makassar" };

function birthday(obj) {
  obj.age++;
  return obj;
}

const updatedUser = birthday(user);
console.log(user.age);
console.log(updatedUser.age);
console.log(user === updatedUser);

// Immutable approach - create a new object
function birthday2(obj) {
  return { ...obj, age: obj.age + 1 };
}

const updatedUser2 = birthday2(user);

console.log(user.age);
console.log(updatedUser2.age);
console.log(user === updatedUser2);

/* = = = = = = = = = =
 4. Why Pure Function is Important
= = = = = = = = = = */
console.log("=== Why Pure Function is Important ===");

// a. Predictable
// You can predict the output just by reading it
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));

// b. Testable
// Easy to test - no mocks, no setup needed
function calculateDiscount(price, discountRate) {
  return price - price * discountRate;
}
// Test cases - straightforward
console.log(calculateDiscount(100000, 0.1) === 90000);
console.log(calculateDiscount(200000, 0.2) === 160000);
console.log(calculateDiscount(0, 0.5) === 0);

// c. Reusable
// This function works anywhere, no dependencies
function formatRupiah(amount) {
  return "Rp " + amount.toLocaleString("id-ID");
}
// Works in any context
console.log(formatRupiah(50000));
console.log(formatRupiah(1500000));

// d. Safe
const products = [
  { name: "Laptop", price: 8000000 },
  { name: "mouse", price: 150000 },
  { name: "Keyboard", price: 350000 },
];
// Safe to call multiple times - products array never changes
function getExpensiveProducts(items, minPrice) {
  return items.filter((p) => p.price >= minPrice);
}
const expensive = getExpensiveProducts(products, 500000);
const cheap = getExpensiveProducts(products, 0);
console.log(products.length);
console.log(expensive.length);
console.log(cheap.length);
