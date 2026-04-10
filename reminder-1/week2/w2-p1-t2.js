const listA = ["beras", "telur", "minyak", "gula"];
const listB = ["gula", "tepung", "telur", "garam"];

// Gabungkan kedua list menjadi satu array combined
const combined = [...listA, ...listB];
console.log(combined);

// Buat array unique, hapus duplikat dari combined
const unique = [...new Set(combined)];
console.log(unique);

// Cek apakah minyak ada di unique
console.log(unique.includes("minyak"));

// Cari index dari "tepung" di unique
console.log(unique.indexOf("tepung"));

// Buat array sorted, unique yang diurutkan secara alfabetis
const sorted = unique.sort();
console.log(sorted);
