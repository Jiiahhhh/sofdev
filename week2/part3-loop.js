// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//count down
console.log("Count Down:");
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// Loop with step 2
console.log("Loop with step 2:");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

const fruits = ["apple", "mango", "banana"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}:${fruits[i]}`);
}

// for...of loop
for (const item of fruits) {
  console.log(item);
}
// Loop through a string
for (const letter of "Halo") {
  console.log(letter);
}
// Loop with index using entries()
for (const [index, item] of fruits.entries()) {
  console.log(`${index}:${item}`);
}

// for...in loop
const student = {
  name: "Budi",
  score: 85,
  class: "A",
};
// Loop all object properties
for (const key in student) {
  console.log(`${key}:${student[key]}`);
}

//while loop: check condition BEFORE execution
let counter = 0;
while (counter < 5) {
  console.log(counter);
  counter++;
}

// do...while: executes AT LEAST ONCE, check condition after
let numbers = 0;
do {
  console.log(numbers);
  numbers++;
} while (numbers < 0);

// break: stop the loop completely
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// continue: skip this iteration, move to next
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

// Real example: find first matching element
const items = ["laptop", "mouse", "keyboard", "monitor"];
let found = null;

for (const item of items) {
  if (item === "mouse") {
    found = item;
    break;
  }
}

console.log("Found:", found);

// Example 1: FizzBuzz (classic exercise)
// Print 1-30, "Fizz" if multiple of 3, "Buzz" if multiple of 5,
// "FizzBuzz" if both
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Example 2: Process array of objects with loop
const orders = [
  { id: 1, product: "Laptop", qty: 1, price: 8000000 },
  { id: 2, product: "Mouse", qty: 3, price: 150000 },
  { id: 3, product: "Keyboard", qty: 2, price: 350000 },
];
let totalRevenue = 0;
for (const order of orders) {
  const subtotal = order.qty * order.price;
  totalRevenue += subtotal;
  console.log(
    `Order${order.id}:${order.product} x ${order.qty} = Rp${subtotal.toLocaleString()}`,
  );
}
console.log(`Total revenue: Rp${totalRevenue.toLocaleString()}`);

// Example 3: Nested loop (loop inside loop)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (const row of matrix) {
  let output = "";
  for (const numbers of row) {
    output += numbers + " ";
  }
  console.log(output.trim());
}

// Example 4: Loop to generate data
function generateNumberList(min, max, step = 1) {
  const result = [];
  for (let i = min; i <= max; i += step) {
    result.push(i);
  }
  return result;
}
console.log(generateNumberList(1, 10));
console.log(generateNumberList(0, 100, 10));
