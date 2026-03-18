// soal 1 (5/5)
const veggies = ["carrot", "spinach"];
const fruits = ["apple", "mango"];

const foods = [...veggies, "banana", ...fruits];
console.log(foods);

// Soal 2 (5/5)
const task = {
  id: 1,
  text: "Learn ES6",
  done: false,
  priority: "high",
};

const completedTask = { ...task, done: true };
console.log(completedTask);

// Soal 3 (5/5)
const defaults = {
  volume: 50,
  brightness: 70,
  language: "id",
  theme: "light",
};
const userSettings = {
  volume: 80,
  theme: "dark",
};

const finalSettings = { ...defaults, ...userSettings };
console.log(finalSettings);

// Soal 4 (5/5)
function multiply(multiplier, ...numbers) {
  return numbers.map((n) => n * multiplier);
}

console.log(multiply(2, 1, 2, 3));
console.log(multiply(10, 5, 10, 15));

// Soal 5 (3/5)
function updateTask(tasks, id, updates) {
  return tasks.map((task) => {
    if (task.id === id) {
      return { ...task, ...updates };
    }
    return task;
  });
}

const tasks = [
  { id: 1, text: "Task 1", done: false },
  { id: 2, text: "Task 2", done: false },
];

const updated = updateTask(tasks, 1, { done: true, text: "Task 1 Updated" });
console.log(updated);
