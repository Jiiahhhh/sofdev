// Soal 1 (4/5)
function parseJSON(str) {
  try {
    const data = JSON.parse(str);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

console.log(parseJSON('{"name": "Ilal"}'));
console.log(parseJSON("ini bukan json"));

// Soal 2 (4.5/5)
function validateAge(age) {
  if (typeof age !== "number") {
    throw new TypeError("Ini bukan number");
  }
  if (age < 0 || age > 120) {
    throw new RangeError("Usia harus dari range 0-120");
  }
  return "Valid";
}

try {
  console.log(validateAge(25));
  console.log(validateAge(-5));
  console.log(validateAge("tua"));
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// Soal 3 (3.5/5)
function readData(data) {
  console.log("Memulai proses...");
  try {
    const hasil = JSON.parse(data);
    console.log(`Berhasil: ${JSON.stringify(hasil)}`);
  } catch (error) {
    console.log(`Gagal: ${error.message}`);
  } finally {
    console.log("Proses selesai.");
  }
}

readData('{"name": "Ilal"}');
readData("bukan json");

// Soal 4 (4/5)
async function fetchUser(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
      throw new Error(`User tidak ditemukan (status: ${res.status})`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

fetchUser(1).then((user) => console.log(user?.name));
fetchUser(99).then((user) => console.log(user));

// Soal 5 (3/5)
function validateProduct(product) {
  if (!product.name || product.name.length < 3) {
    throw new Error("Name harus ada dan panjang minimal 3 karakter");
  }
  if (typeof product.price !== "number" || product.price <= 0) {
    throw new Error("Price harus angka dan lebih daripada 0");
  }
  if (typeof product.stock !== "number" || product.stock < 0) {
    throw new Error("Stock harus angka dan minimal 0");
  }
  return "Valid";
}

try {
  validateProduct({ name: "Laptop", price: 15000000, stock: 5 }); // OK
  validateProduct({ name: "AB", price: 15000000, stock: 5 }); // Error
  validateProduct({ name: "Laptop", price: -1000, stock: 5 }); // Error
} catch (error) {
  console.log(error.message);
}
