const taskList = document.getElementById("taskList");
const li = document.createElement("li");
const summary = document.getElementById("summary");

let tasks = [
  { id: 1, text: "Learn DOM", done: true },
  { id: 2, text: "Build Kanban", done: false },
  { id: 3, text: "Deploy project", done: false },
];

// Soal 1 (5/5)
function createTaskElement(text) {
  li.className = "task";
  li.dataset.id = Date.now();
  li.innerHTML = `<span>${text}</span> <button class="delete-btn">🗑️</button>`;
  return li;
}

// Soal 2 (4/5)
function addTask(text) {
  const task = createTaskElement(text);
  taskList.append(task);
}

// Soal 4 (4/5)
function renderTasks() {
  taskList.innerHTML = tasks
    .map(
      (task) => `
                <li class="task ${task.done ? "done" : ""}" data-id="${task.id}">
                    <span>${task.text}</span> <button class="delete-btn">🗑️</button>
                </li>
            `,
    )
    .join("");
}

// Soal 5 (3/5)
function updateSummary() {
  const total = tasks.length;
  const done = tasks.filter((task) => task.done === true).length;
  const remaining = tasks.filter((task) => task.done === false).length;

  summary.innerHTML = `
        <p>Total ${total} tasks | Done ${done} | Remaining ${remaining}</p>
    `;
}

taskList.addEventListener("click", (e) => {
  // Soal 3 (5/5)
  if (e.target.tagName === "SPAN") {
    const id = Number(e.target.closest(".task").dataset.id);
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task,
    );
    updateSummary();
    renderTasks();
  }

  // Soal 2 (4/5)
  if (e.target.classList.contains("delete-btn")) {
    const id = Number(e.target.closest(".task").dataset.id);
    tasks = tasks.filter((task) => task.id !== id);
    renderTasks();
    updateSummary();
  }
});

// Soal 5 (5/5)
document.getElementById("addTask").addEventListener("click", () => {
  const inputValue = document.getElementById("taskInput").value.trim();
  if (!inputValue) return;
  tasks.push({ id: Date.now(), text: inputValue, done: false });
  renderTasks();
  updateSummary();
});

renderTasks();
updateSummary();
