// Spread Array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Gabungkan dua array
const combined = [...arr1, ...arr2];
console.log(combined);

// Clone array (tanpa mutasi) - tujuan agar ketika digunakan dibanyak tempat array sebagai source of truth tidak rusak
const original = [1, 2, 3];
const clone = [...original];
clone.push(4);
console.log(original);
console.log(clone);

// Spread Object
const defaults = { theme: "light", language: "id", fontSize: 14 };
const userPrefs = { theme: "dark", fontSize: 16 };

// Merge object - userPrefs override defaults
const settings = { ...defaults, ...userPrefs };
console.log(settings);

// Clone object
const user = { name: "Ilal", age: 25 };
const updatedUser = { ...user, age: 26 };
console.log(user);
console.log(updatedUser);

// Spread ke function argument
const numbers = [5, 3, 8, 1, 9];
console.log(Math.max(numbers)); // return 'NaN' karna .max hanya terima individual argument, bukan array
console.log(Math.max(...numbers));

// Fungsi yang bisa terima jumlah argument tak terbatas
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));

// Rest di destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(second);
console.log(rest);

const { name, ...otherProps } = { name: "Ilal", age: 25, city: "Makassar" };
console.log(name);
console.log(otherProps);
