// soal 1 (5/5)
const product = {
  id: 1,
  name: "Laptop",
  price: 15000000,
  specs: { ram: "16GB", storage: "512GB" },
};

const productJSON = JSON.stringify(product);
const productObj = JSON.parse(productJSON);
console.log(productObj.specs.ram);

// soal 2 (5/5)
function prettyPrint(obj) {
  return JSON.stringify(obj, null, 2);
}

console.log(prettyPrint({ name: "Ilal", age: 25 }));

// soal 3 (5/5)
const user = {
  name: "Ilal", // Muncul "Ilal"
  greet: () => "Hello!", // Hilang
  score: undefined, // Hilang
  role: null, // Muncul null
};

console.log(JSON.stringify(user, null, 2));

// Soal 4 (4/5)
function safeParseJSON(str, fallback) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return fallback;
  }
}

console.log(safeParseJSON('{"name":"Ilal"}', {}));
console.log(safeParseJSON("invalid", []));
console.log(safeParseJSON("invalid", { error: true }));

// Soal 5 (3.5/5)
const tasks = [
  { id: 1, text: "Belajar JS", done: true },
  { id: 2, text: "Build project", done: false },
];

const taskString = JSON.stringify(tasks);
const taskObj = JSON.parse(taskString);
const result = taskObj.filter((r) => r.done === false);
console.log(result);
