// Soal 1: Data Diri
const fullName = "Muhammad Ijlal Nurhadi";
const age = 25;
const city = "Makassar";
const isStudent = false;
console.log(
  `Nama saya: ${fullName}, umur ${age} tahun. Saya tinggal di ${city} dan ${isStudent ? "masih" : "sudah lulus"} kuliah.`,
);

// Soal 2: Kalkulator Sederhana
const num1 = 15;
const num2 = 4;

// penjumlahan
const sum = num1 + num2;
// pengurangan
const difference = num1 - num2;
// perkalian
const product = num1 * num2;
// pembagian
const quotient = num1 / num2;
// sisa bagi
const remainder = num1 % num2;

console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${difference}`);
console.log(`${num1} * ${num2} = ${product}`);
console.log(`${num1} / ${num2} = ${quotient}`);
console.log(`${num1} % ${num2} = ${remainder}`);

// Soal 3: Hitung Harga Total
const shoePrice = 250000;
const shirtPrice = 75000;
const hatPrice = 50000;
const shippingCost = 15000;

const subtotal = shoePrice + shirtPrice + hatPrice;
const grandTotal = subtotal + shippingCost;
const discountPercent = 10;
const discountAmount = grandTotal * (discountPercent / 100);
const totalAfterDiscount = grandTotal - discountAmount;

console.log(`Subtotal: Rp${subtotal}`);
console.log(`Grand Total: Rp${grandTotal}`);
console.log(`Harga total dengan diskon 10%: Rp${totalAfterDiscount}`);

// Soal 4: Konversi Suhu
const celsius = 30;
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius} Celsius = ${fahrenheit} Fahrenheit`);

// Soal 5: String Manipulation
const province = "Sulawesi Selatan";
const fullAddress = `${city}, ${province}`;

console.log(fullAddress);
console.log(`panjang kalimat: ${fullAddress.length}`);
console.log(fullAddress.toUpperCase());
