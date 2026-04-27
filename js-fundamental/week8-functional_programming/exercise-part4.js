// Soal 1
function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}
// Curried:
// a)
const curriedGreet = (greeting) => (name) => `${greeting},${name}!`;
const sayHello = curriedGreet("Halo");
console.log(sayHello("Ilal"));
console.log(sayHello("Budi"));

// b)
const filterByCategory = (category) => (items) =>
  items.filter((item) => item.category === category);

// c)
function clamp(min, max, value) {
  return Math.min(Math.max(value, min), max);
}
const curriedClamp = (min) => (max) => (value) =>
  Math.min(Math.max(value, min), max);
const clampScore = curriedClamp(0)(100);
console.log(clampScore(85));
console.log(clampScore(-5));
console.log(clampScore(110));

// Soal 2
// Implementasi fungsi partial
function partial(fn, ...presetArgs) {
  return (...laterArgs) => fn(...presetArgs, ...laterArgs);
}

// Test
function formatCurrency(currency, amount) {
  return `${currency}${amount.toLocaleString()}`;
}
const formatRupiah = partial(formatCurrency, "Rp");
const formatDollar = partial(formatCurrency, "$");

console.log(formatRupiah(50000));
console.log(formatDollar(100));

// Soal 3
const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

const map = (fn) => (arr) => arr.map(fn);
const filter = (fn) => (arr) => arr.filter(fn);
const reduce = (fn, initial) => (arr) => arr.reduce(fn, initial);
const sort = (fn) => (arr) => [...arr].sort(fn);

const students = [
  { name: "Ilal", grade: 85 },
  { name: "Budi", grade: 45 },
  { name: "Andi", grade: 90 },
  { name: "Sari", grade: 72 },
  { name: "Dewi", grade: 55 },
];

const avgPassingGrade = pipe(
  filter((s) => s.grade >= 60),
  map((s) => s.grade),
  sort((a, b) => a - b),
  reduce((sum, n, _, arr) => sum + n / arr.length, 0),
);
console.log(avgPassingGrade(students));
