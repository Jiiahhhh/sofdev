// Soal 1
function applyToAll(arr, fn) {
  const result = [];
  for (const item of arr) {
    result.push(fn(item));
  }
  return result;
}

console.log(applyToAll([1, 2, 3], (n) => n + 10));
console.log(applyToAll(["Ilal", "budi"], (s) => s.toUpperCase()));

// Soal 2
function createMultiplier(multiplier) {
  return function (input) {
    return input * multiplier;
  };
}

// Test:
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(double(12)); // 24

// Soal 3
function createFilter(conditionFn) {
  return function (arr) {
    return arr.filter(conditionFn);
  };
}

// Test:
const getPassingStudents = createFilter((student) => student.grade >= 60);
const getExpensiveItems = createFilter((item) => item.price >= 100000);

const students = [
  { name: "Ilal", grade: 85 },
  { name: "Budi", grade: 45 },
  { name: "Andi", grade: 90 },
  { name: "Sari", grade: 55 },
];

const items = [
  { name: "Laptop", price: 8000000 },
  { name: "Mouse", price: 75000 },
  { name: "Keyboard", price: 350000 },
];

console.log(getPassingStudents(students)); // Ilal & Andi
console.log(getExpensiveItems(items)); // Laptop & Keyboard
