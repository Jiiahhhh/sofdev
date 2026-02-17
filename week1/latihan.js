// Latihan Part 1:
// Soal 1: Data diri
const namaLengkap = "Muhammad Ijlal Nurhadi";
const umur1 = 25;
const kota = "Makassar";
const statusMahasiswa = false;
console.log(
  `Nama saya: ${namaLengkap}, umur ${umur1} tahun. Saya tinggal di ${kota} dan ${statusMahasiswa ? "masih" : "sudah lulus"} kuliah.`,
);

// Soal 2: Kalkulator Sederhana
const angka1 = 15;
const angka2 = 4;

//penjumlahan
const jumlah = angka1 + angka2;
//pengurangan
const kurang = angka1 - angka2;
//perkalian
const kali = angka1 * angka2;
//pembagian
const bagi = angka1 / angka2;
//sisa bagi
const sisa = angka1 % angka2;

console.log(`${angka1} + ${angka2} = ${jumlah}`);
console.log(`${angka1} - ${angka2} = ${kurang}`);
console.log(`${angka1} * ${angka2} = ${kali}`);
console.log(`${angka1} / ${angka2} = ${bagi}`);
console.log(`${angka1} % ${angka2} = ${sisa}`);

// Soal 3: Hitung Harga Total
const hargaSepatu = 250000;
const hargaKaos = 75000;
const hargaTopi = 50000;
const ongkir = 15000;

const subTotal = hargaSepatu + hargaKaos + hargaTopi;
const grandTotal = subTotal + ongkir;
const diskon = 10;
const nilaiDiskon = grandTotal * (diskon / 100);
const setelahDiskon = grandTotal - nilaiDiskon;
console.log(`Subtotal: Rp${subTotal}`);
console.log(`Grand Total: Rp${grandTotal}`);
console.log(`Harga total dengan diskon 10%: Rp${setelahDiskon}`);

// Soal 4: Konversi Suhu
const celsius = 30;

const fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius} Celsius = ${fahrenheit} Fahrenheit`);

// Soal 5: String Manipulation
const kota = "Makassar";
const provinsi = "Sulawesi Selatan";
const daerah = `${kota}, ${provinsi}`;

console.log(daerah);
console.log(`panjang kalimat: ${daerah.length}`);
console.log(daerah.toUpperCase());
