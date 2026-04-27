// Cara lama
const colors = ["red", "green", "blue"];
// const first = colors[0];
// const second = colors[1];
// const third = colors[2];

// Array destructuring - lebih singkat
const [first, second, third] = colors;
console.log(first);
console.log(second);
console.log(third);

// Bisa skip dengan koma
const numbers = [1, 2, 3, 4, 5];

const [a, , c] = numbers;
console.log(a);
console.log(c);

// inisiasi value bila tidak ada value dari variabel yang diambil
const [x = 0, y = 0, z = 0] = numbers;
console.log(x);
console.log(y);
console.log(z);

// Swap variabel tanpa temp variable
let d = 10;
let e = 20;

[d, e] = [e, d];
console.log(d);
console.log(e);

// Object destructuring
const user = {
  name: "Ilal",
  age: 25,
  city: "Makassar",
};

// cara lama
// const name = user.name;
// const age = user.age;

// object destructuring
const { name, age, city } = user;
console.log(name);
console.log(age);
console.log(city);

// Rename saat destrucutring
const {
  name: userName,
  age: userAge,
  city: userCity,
  role = "Programmer", // berikan default value
} = user;
console.log(userName);
console.log(userAge);
console.log(userCity);
console.log(role);

const person = {
  name2: "Ilal",
  address: {
    city2: "Makassar",
    province: "Sulawesi Selatan",
  },
};

// Nested destructuring pada object
const {
  name2,
  address: { city2, province },
} = person;

console.log(name2);
console.log(city2);
console.log(province);

// destructuring pada function parameter
function greet(user) {
  console.log(`Hello, ${user.name}! You are ${user.age} years old`);
}

function greet2({ name, age }) {
  console.log(`Hello ${name}! You are ${age} years old.`);
}

greet2({ name, age });
