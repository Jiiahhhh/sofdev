// Soal 1
function pipe(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
}

// Ready-made functions to compose
const trim = (str) => str.trim();
// const toLowerCase = (str) => str.toLowerCase();
const removeSpaces = (str) => str.replace(/\s+/g, "-");
const addPrefix = (str) => "user-" + str;

// Use pipe to combine all four functions
const formatUsername = pipe(trim, removeSpaces, addPrefix);

// Test:
console.log(formatUsername("  Ilal Maulana  ")); // "user-ilal-maulana"
console.log(formatUsername("  Budi Santoso  ")); // "user-budi-santoso"

// Soal 2
// Ready-made functions
const applyDiscount = (price) => price * 0.9; // 10% discount
const applyTax = (price) => price * 1.11; // 11% tax
const roundPrice = (price) => Math.round(price);
const formatPrice = (price) => "Rp " + price.toLocaleString("id-ID");

// Use pipe to combine all four
const getFinalPrice = pipe(applyDiscount, applyTax, roundPrice, formatPrice);

// Test:
console.log(getFinalPrice(100000)); // "Rp 99.900"
console.log(getFinalPrice(250000)); // "Rp 249.750"
console.log(getFinalPrice(50000)); // "Rp 49.950"

// Soal 3
// Ready-made functions — each receives an object and returns a new object
const trimFields = (user) => ({
  ...user,
  name: user.name.trim(),
  email: user.email.trim(),
});

const toLowerCase = (user) => ({
  ...user,
  email: user.email.toLowerCase(),
});

const addDefaults = (user) => ({
  ...user,
  role: "user",
  active: true,
});

const addTimestamp = (user) => ({
  ...user,
  createdAt: new Date().toISOString(),
});

// Use pipe to combine all four
const processNewUser = pipe(trimFields, toLowerCase, addDefaults, addTimestamp);

// Test:
const rawUser = { name: "  Ilal Maulana  ", email: "  ILAL@GMAIL.COM  " };
console.log(processNewUser(rawUser));
// {
//   name: "Ilal Maulana",
//   email: "ilal@gmail.com",
//   role: "user",
//   active: true,
//   createdAt: "2026-..."
// }
