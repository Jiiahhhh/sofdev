/* = = = = = = = = = =
 1. What is a Higher-Order Function?
= = = = = = = = = = */
console.log("=== What is a Higher-Order Function? ===");

// A regular function
function double(n) {
  return n * 2;
}

// A higher-order function - accepts a function as argument
function applyToNumber(fn, number) {
  return fn(number); // calls the function passed in
}

console.log(applyToNumber(double, 5));
console.log(applyToNumber(double, 12));

// You can also pass an arrow function directly
console.log(applyToNumber((n) => n + 100, 5));

// A higher-order function - returns a new function
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double2 = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double2(5));
console.log(triple(5));
console.log(quadruple(5));

/* = = = = = = = = = =
 2. map, filter, reduce
= = = = = = = = = = */
console.log("=== map, filter, reduce ===");

const prices = [100000, 250000, 50000];

// map accepts a function as argument - that's what makes it a HOF
const discounted = prices.map(function (price) {
  return price * 0.9; // 10% discount
});

console.log(prices);
console.log(discounted);

// Shorter with arrow function - same result
const discounted2 = prices.map((price) => price * 0.9);

const students = [
  { name: "Ilal", grade: 85 },
  { name: "Budi", grade: 45 },
  { name: "Andi", grade: 90 },
  { name: "Sari", grade: 55 },
];

// filter - only keep students where the function returns true
const passing = students.filter(function (student) {
  return student.grade >= 60;
});

console.log(passing);
console.log(students.length);
console.log(passing.length);

const numbers = [1, 2, 3, 4, 5];
// accumulator, current element
const total = numbers.reduce(function (acc, number) {
  return acc + number; // acc carries the running total
}, 0); // 0 is the initial value

console.log(total);

const orders = [
  { product: "Laptop", price: 8000000, qty: 1 },
  { product: "Mouse", price: 150000, qty: 2 },
  { product: "Keyboard", price: 350000, qty: 1 },
];

// Calculate total price of all orders
const grandTotal = orders.reduce((acc, order) => {
  return acc + order.price * order.qty;
}, 0);
console.log(grandTotal);

/* = = = = = = = = = =
 3. Make your own HOF
= = = = = = = = = = */
console.log("=== Make your own HOF ===");

// A HOF that applies a function to every item in an array
// This is basically how map works under the hood
function transform(arr, fn) {
  const result = [];
  for (const item of arr) {
    result.push(fn(item));
  }
  return result;
}

// Now we can pass any function we want
const numbers2 = [1, 2, 3, 4, 5];

const doubled = transform(numbers2, (n) => n * 2);
const squared = transform(numbers2, (n) => n * n);
const formatted = transform(numbers2, (n) => "Rp " + n * 10000);

console.log(doubled);
console.log(squared);
console.log(formatted);

// A HOF that creates a greeting function based on time of day
function createGreeting(timeOfDay) {
  return function (name) {
    return `Good ${timeOfDay}, ${name}!`;
  };
}

const greetMorning = createGreeting("morning");
const greetEvening = createGreeting("evening");

console.log(greetMorning("Ilal"));
console.log(greetEvening("Budi"));

// A HOF that repeats any function n times
function repeat(fn, times) {
  return function (value) {
    let result = value;
    for (let i = 0; i < times; i++) {
      result = fn(result);
    }
    return result;
  };
}

const double3 = (n) => n * 2;

const doubleOnce = repeat(double3, 1);
const doubleTwice = repeat(double3, 2);
const doubleThrice = repeat(double3, 3);

console.log(doubleOnce(5));
console.log(doubleTwice(5));
console.log(doubleThrice(5));
