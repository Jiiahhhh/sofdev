// Soal 1 (4/5)
function save(key, data) {
  return localStorage.setItem(key, JSON.stringify(data));
}

function load(key, fallback) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
}

function remove(key) {
  return localStorage.removeItem(key);
}

// Soal 2 (4/5)
const skills = ["JavaScript", "HTML", "CSS"];
save("skills", skills);
const data = load("skills", []);
data.push("React");
save("skills", data);
console.log(load("skills"));

// Soal 3 (3.5/5)
const count = document.getElementById("count");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
let value = parseInt(load("counter", 0));
count.textContent = value;

btnPlus.addEventListener("click", () => {
  value++;
  save("counter", value);
  count.textContent = value;
});

btnMinus.addEventListener("click", () => {
  value--;
  save("counter", value);
  count.textContent = value;
});

// Soal 4 (3/5)
const noteInput = document.getElementById("noteInput");
const btnTambah = document.getElementById("btnTambah");
const notesList = document.getElementById("notesList");

let notes = load("notes", []);

function renderNotes() {
  notesList.innerHTML = notes
    .map(
      (note) => `
        <div>
            <span>${note.text}</span>
            <button onclick="deleteNote(${note.id})">Hapus</button>
        </div>
        `,
    )
    .join("");
}

function addNote(text) {
  const note = new Object();
  note.id = Date.now();
  note.text = text;
  note.createdAt = new Date().toISOString();

  notes.push(note);
  save("notes", notes);
  renderNotes();
}

window.deleteNote = function (id) {
  notes = notes.filter((note) => note.id !== id);
  save("notes", notes);
  renderNotes();
};

btnTambah.addEventListener("click", () => {
  addNote(noteInput.value);
  noteInput.value = "";
});

renderNotes();

// Soal 5 (4/5)
function safeSave(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    console.log("Data berhasil disimpan");
    return true;
  } catch (error) {
    if (error.name === "QuotaExceededError") {
      console.log("Storage penuh gaes");
    } else {
      console.error(error);
    }
    return false;
  }
}

console.log(safeSave("test", "data"));
