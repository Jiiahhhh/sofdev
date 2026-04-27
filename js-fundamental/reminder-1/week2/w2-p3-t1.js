const products = [
  { name: "Laptop", price: 12000000, qty: 3 },
  { name: "Mouse", price: 250000, qty: 10 },
  { name: "Keyboard", price: 450000, qty: 7 },
  { name: "Monitor", price: 3500000, qty: 2 },
  { name: "Webcam", price: 800000, qty: 5 },
];

let price = 0;
let qty = 0;
let total = 0;

// Hitung total nilai stok semua produk (price x qty)
for (let i = 0; i < products.length; i++) {
  total = products[i].price * products[i].qty + total;
}
console.log(`Total harga keseluruhan: Rp${total.toLocaleString("id-ID")}`);

// Temukan produk termahal
let highest = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].price > highest) {
    highest = products[i];
  }
}
console.log(highest);

// Tampilkan semua produk dalam format "Laptop: Rp 12.000.000 (stok: 3)"
for (let i = 0; i < products.length; i++) {
  console.log(
    `${products[i].name}: Rp${products[i].price.toLocaleString("id-ID")} (stok: ${products[i].qty})`,
  );
}
