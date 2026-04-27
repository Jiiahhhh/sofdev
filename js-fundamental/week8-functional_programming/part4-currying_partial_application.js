/* = = = = = = = = = =
 1. What is Currying?
= = = = = = = = = = */
console.log("=== What is Currying? ===");

// Normal function - all arguments at once
function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3));

// Curried version - one argument at a time
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(curriedAdd(1)(2)(3));

// arrow
const curriedArrowAdd = (a) => (b) => (c) => a + b + c;
console.log(curriedArrowAdd(1)(2)(3));

const add1 = curriedArrowAdd(1);
const add1and2 = curriedArrowAdd(1)(2);

console.log(add1(2)(3));
console.log(add1and2(3));
console.log(add1and2(10));
console.log(add1and2(100));

/* = = = = = = = = = =
 2. Partial Application
= = = = = = = = = = */
console.log("=== Partial Application ===");

// partial - pre-fill some arguments, get a new function back
function partial(fn, ...presetArgs) {
  return function (...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

// Original function - needs 3 arguments
function calculateShipping(weight, distance, rate) {
  return weight * distance * rate;
}

// Pre-fill the rate argument
const jakartaRate = partial(calculateShipping, 0.05);
const surabayaRate = partial(calculateShipping, 0.08);

// Now only need weight and distance
console.log(jakartaRate(10, 100));
console.log(surabayaRate(10, 100));

// Pre-fill TWO arguments at once - this is where partial differs from currying
const heavyPackageJakarta = partial(calculateShipping, 20, 100);
console.log(heavyPackageJakarta(0.05));
console.log(heavyPackageJakarta(0.08));

function formatCurrency(currency, separator, amount) {
  return currency + separator + amount.toLocaleString("id-ID");
}

// bind - first argument is `this` context (null = ignore), rest are preset args
const formatRupiah = formatCurrency.bind(null, "Rp", ".");
const formatDollar = formatCurrency.bind(null, "$", ",");
console.log(formatRupiah(50000));
console.log(formatDollar(100));

/* = = = = = = = = = =
 3. Currying + Composition
= = = = = = = = = = */
console.log("=== Currying + Composition ===");

function pipe(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}

// Curried helper functions - configured first, then used in pipe
const map = (fn) => (arr) => arr.map(fn);
const filter = (fn) => (arr) => arr.filter(fn);
const sort = (fn) => (arr) => [...arr].sort(fn);
// Now they work perfectly inside pipe
const students = [
  { name: "Ilal", grade: 85 },
  { name: "Budi", grade: 45 },
  { name: "Andi", grade: 90 },
  { name: "Sari", grade: 72 },
  { name: "Dewi", grade: 55 },
];
const processStudents = pipe(
  filter((s) => s.grade >= 60),
  sort((a, b) => b.grade - a.grade),
  map((s) => `${s.name}: ${s.grade}`),
);
console.log(processStudents(students));

const products = [
  { name: "Laptop", price: 8000000, category: "electronics", stock: 5 },
  { name: "Mouse", price: 150000, category: "electronics", stock: 0 },
  { name: "Desk", price: 1200000, category: "furniture", stock: 3 },
  { name: "Chair", price: 850000, category: "furniture", stock: 8 },
  { name: "Monitor", price: 3500000, category: "electronics", stock: 2 },
];

// Curried helpers
const filter2 = (fn) => (arr) => arr.filter(fn);
const map2 = (fn) => (arr) => arr.map(fn);
const sort2 = (fn) => (arr) => [...arr].sort(fn);

// Build the pipeline
const getAvailableElectronics = pipe(
  filter2((p) => p.category === "electronics"),
  filter2((p) => p.stock > 0),
  sort2((a, b) => a.price - b.price),
  map2((p) => ({
    name: p.name,
    price: "Rp " + p.price.toLocaleString("id-ID"),
  })),
);
console.log(getAvailableElectronics(products));
