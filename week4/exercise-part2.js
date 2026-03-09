// Soal 1 (5/5)
const li = document.querySelector(".active");
console.log(li.parentElement);
console.log(li.parentElement.parentElement);
console.log(li.closest(".card").dataset.category);

// Soal 2 (4/5)
const container = document.querySelector("#container");
console.log(container.children.length);
console.log(container.children[0].dataset.category);
console.log(container.children[1].firstElementChild.textContent);

// Soal 3 (5/5)
document.getElementById("container").addEventListener("click", (e) => {
  if (e.target.classList.contains("card-btn")) {
    const card = e.target.closest(".card");
    console.log(`Selected category: ${card.dataset.category}`);

    // soal 5 (4/5)
    const items = card.querySelectorAll("li.item");
    const allActive = [...items].every((item) =>
      item.classList.contains("active"),
    );
    if (allActive) {
      items.forEach((item) => item.classList.remove("active"));
      e.target.textContent = "Select All";
    } else {
      items.forEach((item) => item.classList.add("active"));
      e.target.textContent = "Deselect All";
    }
  }
});

// Soal 4 (4/5)
console.log("soal4");
const activeItem = document.querySelectorAll("li.active");
activeItem.forEach((item) => {
  console.log(item.textContent);
  if (item.nextElementSibling) {
    console.log(item.nextElementSibling.textContent);
  }
  if (item.previousElementSibling) {
    console.log(item.previousElementSibling.textContent);
  }
});
