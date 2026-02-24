// Soal 1 (48/50)
const fruits = ["apple", "mango", "banana", "orange", "watermelon"];
// TODO:
// 1. Console.log the first and last element using index
console.log(`First fruits: ${fruits[0]}`);
// console.log(`Last fruits: ${fruits[4]}`);
console.log(`Last fruits: ${fruits[fruits.length - 1]}`);
//2. Show total number of fruits using .length
console.log(`Total fruits: ${fruits.length}`);
// 3. Add "durian" to the end of the array
fruits.push("durian");
console.log(fruits);
// 4. Remove the first element and save it to a variable called removed
const removed = fruits.shift();
console.log(removed);
// 5. Console.log the array after all changes
console.log(fruits);

// Soal 2 (50/50)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Numbers: ${numbers}`);
// TODO:
// 1. Create new array "squared" with each number squared
const squared = numbers.map((n) => n ** 2);
console.log(`Squared: ${squared}`);
// 2. Create new array "odds" with odd numbers only
const odds = numbers.filter((n) => n % 2 !== 0);
console.log(`Odds: ${odds}`);
// 3. Create "greaterThan5" array with numbers > 5 then multiply by 2
const greaterThan5 = numbers.filter((n) => n > 5).map((n) => n * 2);
console.log(`Greater Than 5, than multiply by 2: ${greaterThan5}`);

// Soal 3 (50/50)
const products = [
  { name: "Laptop", price: 8000000 },
  { name: "Mouse", price: 150000 },
  { name: "Keyboard", price: 350000 },
  { name: "Monitor", price: 2500000 },
  { name: "Headset", price: 450000 },
];
// TODO:
// 1. Find the product named "Monitor" using find()
const monitor = products.find((p) => p.name === "Monitor");
console.log(monitor);
// 2. Find the first product priced below 200000
const belowPrice = products.find((p) => p.price < 200000);
console.log(belowPrice);
// 3. Calculate the total price of all products using reduce()
const totalPrice = products.reduce((acc, n) => acc + n.price, 0);
console.log(totalPrice);

// Soal 4 (47/50)
// const sentence = "I am learning Javascript in Makassar";
const sentence = "I am learning JavaScript in Makassar";
// TODO:
// 1. Split the sentence into an array of words using split(" ")
const words = sentence.split(" ");
console.log(words);
// 2. Count the number of words
console.log(`Count number of words: ${words.length}`);
// 3. Convert all words to uppercase using map()
const upperCase = words.map((word) => word.toUpperCase());
console.log(upperCase);
// 4. Join back into a string using join (" ")
console.log(words.join(" "));
// 5. Check if the word "JavaScript" exists in the array using includes()
console.log(`Sentences has "JavaScript": ${words.includes("JavaScript")}`);

// Soal 5(49/50)
const students = [
  { name: "Budi", score: 85, class: "A" },
  { name: "Siti", score: 92, class: "B" },
  { name: "Ahmad", score: 67, class: "A" },
  { name: "Dewi", score: 78, class: "B" },
  { name: "Rina", score: 95, class: "A" },
  { name: "Joko", score: 55, class: "B" },
];
// TODO:
// 1. Extract only student names (array of strings)
const names = students.map((s) => s.name);
console.log(names);
// 2. Filter students who passed (score >= 70)
const passedStudent = students.filter((s) => s.score >= 70);
console.log(passedStudent);
// 3. Calculate average score of all students
const totalScore = students.reduce((acc, s) => acc + s.score, 0);
const avgScore = totalScore / students.length;
console.log(avgScore);
// 4. Find the student named "Dewi"
const dewi = students.find((s) => s.name === "Dewi");
console.log(dewi);
// 5. Filter class "A" students who passed
// const classAPassed = passedStudent.filter((s) => s.class == "A");
const classAPassed = passedStudent.filter((s) => s.class === "A");
console.log(classAPassed);
