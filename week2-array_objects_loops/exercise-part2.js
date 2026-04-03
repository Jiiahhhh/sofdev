// Soal 1 (50/50)
// TODO:
// 1. Create an object "profil" with properties:
//    - name (string): your name
//    - age (number): your age
//    - city (string): your city
//    - pekerjaan (string): your job
//    - skills (array of strings): at least 3 skills
const profile = {
  name: "Ilal",
  age: 24,
  city: "Makassar",
  job: "Software Developer",
  skills: ["Javascript", "Java", "MySql"],
};
// 2. Access and console.log each property using dot notation
console.log(profile.name);
console.log(profile.age);
console.log(profile.city);
console.log(profile.job);
console.log(profile.skills);
// 3. Add a new property "hobby" (string/array)
profile.hobby = ["Gaming", "Watch movie"];
console.log(profile.hobby);
// 4. Change the "city" value to another city
profile.city = "Yogyakarta";
console.log(profile.city);
console.log(profile);

// Soal 2 (47/50)
// TODO: Create an object "circle" with:
// - Property: radius (number, e.g.: 7)
// - Method: calculateArea() → return π × r² (use Math.PI)
// - Method: calculateCircumference() → return 2 × π × r
// - Method: info() → return string:
//   "Circle with radius 7, area 153.94, circumference 43.98"
//   (round to 2 decimals using .toFixed(2))
// Test all methods!
const circle = {
  radius: 7,

  calculateArea: function () {
    return Math.PI * this.radius ** 2;
  },

  calculateCircumference: function () {
    return 2 * Math.PI * this.radius;
  },

  info: function () {
    // return `Circle with radius 7, area: ${this.calculateArea().toFixed(2)}, circumference: ${this.calculateCircumference().toFixed(2)}`;
    return `Circle with radius ${this.radius}, area: ${this.calculateArea().toFixed(2)}, circumference: ${this.calculateCircumference().toFixed(2)}`;
  },
};

console.log(circle.calculateArea());
console.log(circle.calculateCircumference());
console.log(circle.info());

// Soal 3 (50/50)
const employee = {
  id: "EMP001",
  name: "Dewi Rahayu",
  position: "Frontend Developer",
  salary: 12000000,
  departement: "Engineering",
  location: "Jakarta",
};
//TODO:
// 1. Destructure: extract name, position, and salary from employee
const { name, position, salary } = employee;
console.log(name);
console.log(position);
console.log(salary);
// 2. Create new object "promotedEmployee" using spread, update:
//    - position: "Senior Frontend Developer"
//    - salary: 16000000
const promotedEmployee = {
  ...employee,
  position: "Senior Frontend Developer",
  salary: 16000000,
};
console.log(promotedEmployee.position);
console.log(promotedEmployee.salary);
// 3. Destructure with rename: get "location" but save to variable "city"
const { location: city } = employee;
console.log(city);

// Soal 4 (50/50)
const inventory = {
  laptop: 15,
  mouse: 42,
  keyboard: 30,
  monitor: 8,
  headset: 25,
};
//TODO:
// 1. Show all item names using Object.keys()
console.log(Object.keys(inventory));
// 2. Show all stock quantities using Object.values()
console.log(Object.values(inventory));
// 3. Display each item with its format using Object.entries():
//    "laptop: 15 unit"
//    "mouse: 42 unit"
//    etc...
Object.entries(inventory).forEach(([key, value]) => {
  console.log(`${key}: ${value} unit`);
});
// 4. Calculate total stock using Object.values() + reduce()
const totalStock = Object.values(inventory).reduce((acc, n) => acc + n, 0);
console.log(totalStock);

// Soal 5 (48/50)
const employees = [
  { name: "Andi", division: "Engineering", salary: 12000000, active: true },
  { name: "Bela", division: "Marketing", salary: 8000000, active: true },
  { name: "Cici", division: "Engineering", salary: 15000000, active: false },
  { name: "Doni", division: "HR", salary: 9000000, active: true },
  { name: "Eva", division: "Engineering", salary: 18000000, active: true },
];
//TODO:
// 1. Filter active employees
const activeEmployees = employees.filter((e) => e.active === true);
console.log("Here are active employees:");
activeEmployees.forEach((e) => {
  console.log(
    `- ${e.name} from ${e.division} division with salary Rp${e.salary} and ${e.active == true ? "Active" : "Inactive"} employee`,
  );
});
// 2. Show names of all active Engineering employees
const engineeringEmployees = employees.filter(
  (e) => e.division === "Engineering" && e.active === true,
);
const activeEngineeringEmployeeNames = engineeringEmployees.map((e) => e.name);
console.log(
  `Here are names of all active engineering employees: ${activeEngineeringEmployeeNames}`,
);
// 3. Calculate total salary of active employees
const totalSalaryActiveEmployees = activeEmployees.reduce(
  (acc, e) => acc + e.salary,
  0,
);
console.log(
  `Total salary of All active employees are: Rp${totalSalaryActiveEmployees}`,
);
// 4. Calculate average Engineering salary
const averageEngineeringSalary =
  engineeringEmployees.reduce((acc, e) => acc + e.salary, 0) /
  engineeringEmployees.length;
console.log(
  `The average engineering salary are: Rp${averageEngineeringSalary}`,
);
// 5. Find employee with highest salary (hint: use reduce() or sort())
// const highestSalary = employees.sort((a, b) => b.salary - a.salary)[0];
const highestSalary = employees.reduce(
  (max, e) => (e.salary > max.salary ? e : max),
  employees[0],
);
console.log(
  `Employee with highest salary is: ${highestSalary.name} with Rp${highestSalary.salary}`,
);
