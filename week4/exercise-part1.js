const fruitList = document.getElementById("fruit-list");
const log = document.getElementById("log");
const inputFruit = document.getElementById("newFruit");
const btnAddFruit = document.getElementById("addBtn");

fruitList.addEventListener("click", (e) => {
  // Soal 1
  if (e.target.classList.contains("delete-btn")) {
    // Soal 3
    alert(`Deleting fruit with ID: ${e.target.parentElement.dataset.id}`);
    e.target.parentElement.remove();
  }
  // Soal 5
  else if (e.target.classList.contains("edit-btn")) {
    const newName = prompt("Enter new name: ");
    if (newName) {
      e.target.parentElement.innerHTML = `
      ${newName}
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    }
  }

  // Soal 2
  if (e.target.tagName === "LI") {
    log.innerHTML = `
        <p>${e.target.tagName}</p>
        <p>${e.currentTarget.id}</p>
    `;
  }
});

// Soal 4
function addFruit(name) {
  const li = document.createElement("li");
  li.className = "fruit-item";
  li.dataset.id = Date.now();
  li.innerHTML = `${name} <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;
  fruitList.appendChild(li);
}

btnAddFruit.addEventListener("click", (e) => {
  const name = inputFruit.value.trim();
  if (name) {
    addFruit(name);
    inputFruit.value = "";
  }
});
