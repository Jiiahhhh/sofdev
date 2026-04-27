const inputText = document.getElementById("inputText");
const btnSubmit = document.getElementById("btnSubmit");
const output = document.getElementById("output");

btnSubmit.addEventListener("click", () => {
  const name = inputText.value.trim();
  if (!name) {
    output.textContent = "Tolong masukkan namamu dulu";
    return;
  }
  output.textContent = `Halo, ${inputText.value}! Selamat datang`;
});

const counter = document.getElementById("counter");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");

let count = 0;
decrease.disabled = true;

decrease.addEventListener("click", () => {
  count--;
  counter.textContent = count;
  if (count <= 0) {
    decrease.disabled = true;
  }
});

increase.addEventListener("click", () => {
  decrease.disabled = false;
  count++;
  if (count >= 10) {
    counter.style.color = "red";
  }
  counter.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
  counter.style.color = "";
  decrease.disabled = true;
});
