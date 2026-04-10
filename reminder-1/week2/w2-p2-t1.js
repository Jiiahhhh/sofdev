const laptop = {
  brand: "Asus",
  model: "Asus TUF A14",
  ram: 32,
  storage: 1028,
  price: 28000000,
  inStock: true,
};

// Akses dan tampilkan setiap properti dengan dot notation
console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.ram);
console.log(laptop.storage);
console.log(laptop.price);
console.log(laptop.inStock);

// Update price menjadi 10% lebih murah
const newPrice = laptop.price - (laptop.price * 10) / 100;
laptop.price = newPrice;
console.log(laptop.price);

// Tambahkan property baru warranty
laptop.warranty = "2 TAHUN";
console.log(laptop.warranty);

// Hapus property inStock menggunakan delete
delete laptop.inStock;
console.log(laptop.inStock);

// Tampilkan semua keys yang tersisa
console.log(Object.keys(laptop));
