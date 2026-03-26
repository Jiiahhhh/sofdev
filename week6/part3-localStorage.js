/* = = = = = = = = = =
 1. CRUD localStorage
= = = = = = = = = = */

// CREATE / UPDATE - simpan data
localStorage.setItem("username", "Ilal");

// READ - ambil data
const name = localStorage.getItem("username");
console.log(name);

// DELETE - hapus satu key
localStorage.removeItem("username");

// CLEAR - hapus semua data
localStorage.clear();

// localStorage hanya bisa menyimpan string, jadi kalau ada number akan diubah jadi string
localStorage.setItem("age", 25);
const age = localStorage.getItem("age");
console.log(age);
console.log(typeof age);

/* = = = = = = = = = =
 2. Simpan Object/Array
= = = = = = = = = = */

const user = { name: "Ilal", age: 25 };

// ❌ SALAH - tersimpan sebagai "[object Object]"
localStorage.setItem("user", user);

// ✅ Benar - stringify dulu
localStorage.setItem("user", JSON.stringify(user));

const data = JSON.parse(localStorage.getItem("user"));
console.log(data.name);

// Buat array
const skills = ["JavaScript", "HTML", "CSS"];

// simpan
localStorage.setItem("skills", JSON.stringify(skills));

// ambil
const result = JSON.parse(localStorage.getItem("skills"));
console.log(result[1]);

// ❌ Error kalau key tidak ada - getItem return null
const tasks = JSON.parse(localStorage.getItem("tasks"));
tasks.push("new task");

// ✅ Handle null dengan fallback
const tasks2 = JSON.parse(localStorage.getItem("tasks")) || [];
tasks2.push("new task");

/* = = = = = = = = = =
 3. Helper Functions Pattern
= = = = = = = = = = */

// simpan data
function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ambil data
function load(key, fallback = null) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
}

// hapus data
function remove(key) {
  localStorage.removeItem(key);
}

// tanpa helper - verbose
localStorage.setItem("tasks", JSON.stringify(tasks));
const tasks3 = JSON.parse(localStorage.getItem("tasks")) || [];

save("tasks", tasks);
const tasks4 = load("tasks", []);

/* = = = = = = = = = =
 4. localStorage vs sessionStorage
= = = = = = = = = = */

// localStorage
localStorage.setItem("token", "abc123");
localStorage.getItem("token");
localStorage.removeItem("token");

// sessionStorage - sama persis!
sessionStorage.setItem("token", "abc123");
sessionStorage.getItem("token");
sessionStorage.removeItem("token");

// Kapan pakai yang mana?
// localStorage -> data yang perlu persisten
// localStorage -> data sementara
