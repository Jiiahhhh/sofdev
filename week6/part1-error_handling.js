/* = = = = = = = = = =
 1. Try / Catch / Finally
= = = = = = = = = = */

// Contoh 1 - tanpa error
try {
  const hasil = 10 + 5;
  console.log("Hasil:", hasil);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Finally selalu jalan");
}

// Contoh 2 - dengan error
try {
  const data = JSON.parse("ini bukan JSON");
  console.log(data);
} catch (error) {
  console.log("Ketangkep di catch!");
} finally {
  console.log("Finally tetap jalan");
}

/* = = = = = = = = = =
 2. Object Error
= = = = = = = = = = */
try {
  null.property;
} catch (error) {
  console.log(error.name); // TypeError
  console.log(error.message); // Cannot read properties of null
  console.log(error.stack); // stack trace lengkap
}

try {
  null.property;
} catch (error) {
  console.log(`Errornya: ${error.name}: ${error.message}`);
}

/* = = = = = = = = = =
 3. Jenis Jenis Error Bawaan JS
= = = = = = = = = = */

// TypeError - tipe yang salah
try {
  null.name;
} catch (error) {
  console.log(error.name, ":", error.message);
}

// ReferenceError - variable tidak ada
try {
  console.log(unknownVariable);
} catch (error) {
  console.log(error.name, ":", error.message);
}

// SyntaxError - JSON tidak valid
try {
  JSON.parse("bukan json");
} catch (error) {
  console.log(error.name, ":", error.message);
}

// RangeError - nilai di luar batas
try {
  new Array(-1);
} catch (error) {
  console.log(error.name, ":", error.message);
}

/* = = = = = = = = = =
 4. Throw - Lempar Error Sendiri
= = = = = = = = = = */

function divide(a, b) {
  if (b === 0) {
    throw new Error("Tidak bisa dibagi 0!");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // lempar error!
  console.log(divide(9, 3));
} catch (error) {
  console.log(error.message); // Tidak bisa dibagi 0!
}

function getUser(id) {
  if (typeof id !== "number") {
    throw new TypeError("ID harus berupa angka");
  }
  if (id < 1) {
    throw new RangeError("ID harus lebih dari 0");
  }
  return { id, name: "Ilal" };
}

try {
  console.log(getUser(1)); // { id: 1, name: "Ilal" }
  console.log(getUser("abc")); // TypeError
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

/* = = = = = = = = = =
 5. Error Handling di Async/Await
= = = = = = = = = = */
async function fetchUser(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`User tidak ditemukan (status: ${res.status})`);
    }

    console.log(data.name);
  } catch (error) {
    console.log("Gagal fetch: ", error.message);
  }
}

fetchUser(1);
fetchUser(99);
