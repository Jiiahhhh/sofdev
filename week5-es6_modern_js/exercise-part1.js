// soal 1
// const fruits = ["apple", "mango", "banana", "grape", "orange"];
// const [first, , third, , last] = fruits;
// console.log(first);
// console.log(third);
// console.log(last);

// soal 2
const product = {
  id: 101,
  name: "laptop",
  price: 15000000,
  brand: "Asus",
};

// const { id, name, price: harga, stock = 0 } = product;
// console.log(id);
// console.log(name);
// console.log(harga);
// console.log(stock);

// soal 3
function displayProduct({ name, price, brand }) {
  console.log(`${brand} ${name} - Rp ${price}`);
}

displayProduct({ name: "Laptop", price: 15000000, brand: "Asus" });

// soal 4
const order = {
  id: "ORD-001",
  customer: {
    name: "Ilal",
    address: {
      city: "Makassar",
      zip: "90111",
    },
  },
  total: 250000,
};

const {
  id,
  customer: {
    name,
    address: { city },
  },
} = order;

console.log(id);
console.log(name);
console.log(city);

// Soal 5
let scores = [85, 92, 78, 95, 88];
let [first, second] = scores;
[first, second] = [second, first];

function getMinMax(scores) {
  const sorted = [...scores].sort((a, b) => a - b);
  const [min, ...rest] = sorted;
  const max = rest[rest.length - 1];
  return { min, max };
}

const { min, max } = getMinMax(scores);
console.log(min);
console.log(max);
