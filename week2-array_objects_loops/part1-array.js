// 1. Array literal (most common way)
const fruits = ["apple", "mango", "banana", "orange"];
//                [0]       [1]      [2]       [3]      <- INDEX (starts from 0!)
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango
console.log(fruits[3]); // Orange
console.log(fruits[4]); // Undefined (doesn't exist!)

// Access from the end
console.log(fruits[fruits.length - 1]); // "Orange" (last element)

// Length Property
console.log(fruits.length);

const numbers = [1, 2, 3, 4, 5];
const mixed = ["Ahmad", 24, true, null]; // can mix data types

// 2. Empty array (fill later)
const list = [];

// 3. Array of objects (very common in real-world)
const students = [
  { name: "Budi", score: 85 },
  { name: "Siti", score: 92 },
];

// MUTATING METHODS (modifies the original array)
// push() - add element at the end
numbers.push(6);
console.log(numbers);

// pop() - remove last element ()
const last = numbers.pop();
console.log(last);
console.log(numbers);

// unshift() - add element at the beginning
numbers.unshift(0);
console.log(numbers);

// shift() - remove first element
const first = numbers.shift();
console.log(first);
console.log(numbers);

// splice() - remove/add at specific position
// splice(startIndex, deleteCount, ...itemsToAdd)
numbers.splice(2, 1); // remove 1 element at index 2
console.log(numbers);

numbers.splice(2, 0, 3); // add 3 at index 2, delete 0
console.log(numbers);

// NON-MUTATING METHODS (does NOT modify the original array)
// map() - transform each eleemnt, returns NEW array
const doubled = numbers.map((n) => n * 2);
console.log(doubled);
console.log(numbers);

// filter() - filter elements, returns NEW array
const evens = numbers.filter((n) => n % 2 === 0);
console.log(`Even in array: ${evens}`);

// find() - find first element that meets the conditon
const greaterThan3 = numbers.find((n) => n > 3);
console.log(`Greater than 3: ${greaterThan3}`);

// forEach() - loop each element (returns nothing)
numbers.forEach((n) => console.log(n));

// reduce() - reduce array into a single value
const total = numbers.reduce((acc, n) => acc + n, 0);
console.log(total); // (1+2+3+4+5)

// includes() - check if element exists
console.log(numbers.includes(3));
console.log(numbers.includes(9));

// indexOf() - find element position
console.log(numbers.indexOf(3)); // 2 (at index 2)
console.log(numbers.indexOf(9)); // -1 (not found)

// join() - merge array into a string
const words = ["Hello", "from", "Makassar"];
console.log(words.join(" ")); // Hello from Makassar

// slide() - extract part of array (start, end - exclusive)
console.log(numbers.slice(1, 3)); // [2, 3]
console.log(numbers.slice(2)); // [3, 4, 5] (till the end)

// concat() - merge two arrays
const a = [1, 2, 3];
const b = [4, 5, 6];
console.log(a.concat(b)); // [1, 2, 3, 4, 5, 6]

// Modern way using spread operator:
console.log([...a, ...b]); // [1, 2, 3, 4, 5, 6];

// Real-world example: Student grade data
const studentScores = [
  { name: "Budi", score: 85 },
  { name: "Siti", score: 92 },
  { name: "Ahmad", score: 67 },
  { name: "Dewi", score: 78 },
  { name: "Rina", score: 95 },
];

// 1. map() - extract student names only
const nameList = studentScores.map((s) => s.name);
console.log(nameList);

// 2. filter() - students who passed (score >= 75)
const passed = studentScores.filter((s) => s.score >= 75);
console.log(passed);

// 3. find() - search for a specific student
const findSiti = studentScores.find((s) => s.name === "Siti");
console.log(findSiti);

// 4. reduce() - calculate average score
const totalScore = studentScores.reduce((acc, s) => acc + s.score, 0);
const average = totalScore / studentScores.length;
console.log(average);

const passedTotalScore = studentScores
  .filter((s) => s.score >= 75)
  .map((s) => s.score)
  .reduce((acc, n) => acc + n, 0);
console.log(passedTotalScore);

// Real-world case: Managing a todo list
// Initial data
const todos = [
  { id: 1, task: "Learn Javascript", done: true },
  { id: 2, task: "Build Calculator", done: true },
  { id: 3, task: "Learn Arrays", done: false },
  { id: 4, task: "Build Grade Manager", done: false },
];

// 1. Show all incomplete tasks
const incomplete = todos.filter((todo) => !todo.done);
console.log(incomplete);
incomplete.forEach((todo) => console.log(`-${todo.task}`));

// 2. Mark a task as completed
function completeTask(id) {
  return todos.map((todo) => (todo.id === id ? { ...todo, done: true } : todo));
}
const updatedTodos = completeTask(3);
console.log(updatedTodos[2]);

// 3. Calculate progress
const doneCount = todos.filter((t) => t.done).length;
const progress = (doneCount / todos.length) * 100;
console.log(`Progress:${progress}%`);

function addTask(list, newTask) {
  const newId = list.length + 1;
  return [...list, { id: newId, task: newTask, done: false }];
}

const todosWithNew = addTask(todos, "Deploy to Github");
console.log(todosWithNew.length);
