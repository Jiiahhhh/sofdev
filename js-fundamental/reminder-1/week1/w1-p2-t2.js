function analyzeSalary(gaji, pajak, tunjangan) {
  let status = "";
  let salary = gaji - (gaji * pajak) / 100 + tunjangan;
  let cukupUntukSewa = salary > 3000000;
  if (salary < 5000000) {
    status = "Entry";
  } else if (salary <= 15000000) {
    status = "Mid";
  } else {
    status = "Senior";
  }
  return { salary, status, cukupUntukSewa };
}

const formatRupiah = (angka) =>
  angka.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

const scenario1 = analyzeSalary(4000000, 5, 500000);
const scenario2 = analyzeSalary(8000000, 10, 1500000);
const scenario3 = analyzeSalary(20000000, 15, 3000000);

console.log(
  formatRupiah(scenario1.salary),
  "|",
  scenario1.status,
  "| Cukup sewa:",
  scenario1.cukupUntukSewa,
);
console.log(
  formatRupiah(scenario2.salary),
  "|",
  scenario2.status,
  "| Cukup sewa:",
  scenario2.cukupUntukSewa,
);
console.log(
  formatRupiah(scenario3.salary),
  "|",
  scenario3.status,
  "| Cukup sewa:",
  scenario3.cukupUntukSewa,
);
