// Generate tabel perkalian dari 1 sampai n (untuk n = 3, tampilkan tabel 1x, 2x, 3x)
function generateMultiplicationTable(n) {
  for (let i = 1; i <= n; i++) {
    console.log("");
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}

generateMultiplicationTable(2);

// Buat fungsi isPrime yang return true jika num adalah bilangan prima
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Gunakan fungsi isPrime untuk tampilkan semua bilangan prima antara 1 dan 50
for (let i = 1; i <= 50; i++) {
  if (isPrime(i)) {
    console.log("Prima");
    continue;
  }
  console.log(i);
}
