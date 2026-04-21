// Soal 1
// Fungsi A (IMPURE)
let discount = 0.1;
function getPrice(price) {
  return price - price * discount;
}

// Fungsi A (PURE)
function getPrice(price, discount) {
  return price - price * discount;
}

// Fungsi B (PURE)
function double(arr) {
  return arr.map((n) => n * 2);
}

// Fungsi C (IMPURE)
function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}

// Fungsi C (PURE)
function saveUser(user) {
  return JSON.stringify(user);
}

// Fungsi D (PURE)
function formatName(first, last) {
  return `${first}${last}`.trim();
}

// Soal 2
// a) Tambah item ke array - return array baru
function addItem(arr, item) {
  return [...arr, item];
}

// b) Hapus item dari array berdasarkan index - return array BARU
function removeAt(arr, index) {
  return arr.filter((_, i) => i !== index);
}

// c) Update object - return object BARU
function updateUser(user, updates) {
  return { ...user, ...updates };
}

// Test:
const users = [{ name: "Ilal", age: 25 }];
const newUsers = addItem(users, { name: "Budi", age: 30 });
console.log(users.length);
console.log(newUsers.length);

const updated = updateUser(users[0], { age: 26 });
console.log(users[0].age);
console.log(updated.age);

// Soal 3
function addStudent(students, name, grade) {
  return [...students, { name, grade, id: Date.now() }];
}

function removeStudent(students, name) {
  return students.filter((s) => s.name !== name);
}

function getPassingStudents(students) {
  return students.filter((s) => s.grade >= 60);
}

// Usage:
let students = [];
students = addStudent(students, "Ilal", 85);
students = addStudent(students, "Budi", 55);
console.log(getPassingStudents(students)); // [{ name: "Ilal", ... }]
students = removeStudent(students, "Budi");
