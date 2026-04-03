// Function Declaration
function sapa(nama) {
  return `Halo ${nama}`;
}

// Function arrow
const sapa2 = (nama) => {
  return `Halo ${nama}`;
};

console.log(sapa("ilal"));
console.log(sapa2("ilal"));

// Kalau diminta mengembalikan value harus pakai return
// Kalau menjalankan suatu command gak perlu pake return
// contoh:
function printHello() {
  console.log("Hello World");
}
printHello();

function hitungLuasPersegi(sisi) {
  return sisi * sisi;
}

console.log(
  `Luas persegi dengan sisi sepanjang 5cm adalah ${hitungLuasPersegi(5)} cm persegi`,
);

function hitungTotalHarga(harga, jumlah, diskon = 0) {
  const subtotal = harga * jumlah;
  const nilaiDiskon = subtotal * (diskon / 100);
  const total = subtotal - nilaiDiskon;

  return total;
}
console.log(hitungTotalHarga(50000, 3));
console.log(hitungTotalHarga(50000, 3, 10));

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function convertTemperature(value, unit) {
  if (unit === "C") {
    return celsiusToFahrenheit(value);
  } else if (unit === "F") {
    return fahrenheitToCelsius(value);
  }

  return "Invalid unit";
}

console.log(`30 Celsius = ${convertTemperature(30, "C")} Fahrenheit`);
console.log(`86 Fahrenheit = ${convertTemperature(86, "F")} Celsius`);

const kuadrat = (n) => n * n;
const kubik = (n) => n * n * n;
const isEven = (n) => n % 2 === 0;

console.log(kuadrat(5));
console.log(kubik(3));
console.log(isEven(4));
console.log(isEven(7));

// Latihan Part 2 (skor: 47/50)
// Soal 1
function greetUser(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`;
}

console.log(greetUser("Budi", "Morning"));
console.log(greetUser("Budi", "Afternoon"));
console.log(greetUser("Budi", "Evening"));

// Question 2
function calculateBMI(weightKg, heightM) {
  return weightKg / (heightM * heightM);
}

console.log(calculateBMI(70, 1.7));

// Question 3
function checkNumber(number) {
  if (number < 0) {
    return "Negative";
  } else if (number === 0) {
    return "Zero";
  } else {
    return "Positive";
  }
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));

// Question 4
function calculateDiscount(totalPurchase) {
  let discount;
  if (totalPurchase > 500000) {
    discount = 20;
  } else if (totalPurchase >= 100000) {
    discount = 10;
  } else {
    discount = 0;
  }
  return (totalPurchase * discount) / 100;
}

console.log(calculateDiscount(50000));
console.log(calculateDiscount(300000));
console.log(calculateDiscount(600000));

// Question 5
function calculateRectangleArea(length, width) {
  return length * width;
}

function calculateRectanglePerimeter(length, width) {
  return 2 * (length + width);
}

function getRectangleInfo(length, width) {
  const area = calculateRectangleArea(length, width);
  const perimeter = calculateRectanglePerimeter(length, width);
  return {
    area: area,
    perimeter: perimeter,
  };
}

console.log(getRectangleInfo(10, 5));
