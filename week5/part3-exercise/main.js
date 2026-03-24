import { formatCurrency, capitalize, truncate } from "./utils.js";
import TaskManager from "./data.js";

// utils.js
console.log(formatCurrency(150000));
console.log(capitalize("hello world"));
console.log(truncate("This is a long text", 10));

// data.js
TaskManager.add("doing laundry");
TaskManager.add("meeting online");
TaskManager.add("wash shoes");

const firstTask = TaskManager.getAll()[0];
TaskManager.remove(firstTask.id);

console.log(TaskManager.getAll());

const output = document.getElementById("output");
output.innerHTML = TaskManager.getAll()
  .map(
    (task) => `
    <div class="task">
      <span>${task.text}</span>
      <span>${task.done ? "✅" : "⏳"}</span>
    </div>
  `,
  )
  .join("");
