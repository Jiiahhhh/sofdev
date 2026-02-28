// soal 1 (44/50)
//TODO:
// 1. Use a for loop to print numbers 1-10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// 2. Use a for loop to print numbers 10 down to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// 3. Use a for loop to print all even numbers from 2 to 20
// for (let i = 0; i <= 20; i++) {
for (let i = 0; i <= 20; i += 2) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
// 4. Use a while loop to count how many times 1000 must be divided by 2
//    until the result is < 10 (use a counter)
let counter = 0;
let value = 1000;
while (value > 10) {
  value = value / 2;
  counter++;
  console.log(`${counter}: ${value}`);
}

//soal 2 (45/50)
const scores = [78, 85, 92, 67, 95, 72, 88, 60, 91, 75];
//TODO using LOOP (not array methods!):
// 1. Calculate average score
let totalScore = 0;
for (const score of scores) {
  totalScore += score;
}
const avgScore = totalScore / scores.length;
console.log(avgScore);
// 2. Find the highest score
let highest = scores[0];
for (const s of scores) {
  if (s > highest) {
    highest = s;
  }
}
console.log(`Highest Score: ${highest}`);
// 3. Find the lowest score
let lowest = scores[0];
for (const s of scores) {
  if (s < lowest) {
    lowest = s;
  }
}
console.log(`Lowest Score: ${lowest}`);
// 4. Count how many students passed (score >= 70)
let passedStudent = 0;
for (const s of scores) {
  if (s >= 70) {
    passedStudent++;
  }
}
console.log(`Passed Student: ${passedStudent}`);
// 5. Create a new array with only passing scores
let passingArray = [];
for (const s of scores) {
  if (s >= 70) {
    passingArray.push(s);
  }
}
console.log(passingArray);

//soal 3 (45/50)
const school = {
  name: "SMA Negeri 1",
  city: "Makassar",
  teacherCount: 45,
  studentCount: 1200,
  accreditation: "A",
};

//TODO:
// 1. Use for...in to display all properties and their values
for (const key in school) {
  console.log(`${key}: ${school[key]}`);
}
// 2. Use for...in to count how many properties exist
let propertiesCount = 0;
for (const key in school) {
  propertiesCount++;
}
console.log(propertiesCount);
// 3. Check with for...in: are there any properties with a number value?
let numberProperties = 0;
for (const key in school) {
  if (typeof school[key] === "number") {
    console.log(`${key}: ${school[key]}`);
  }
}
//    Display those properties

//Soal 4 (48/50)
// Create FizzBuzz from 1 to 50:
// - Multiple of 3: print "Fizz"
// - Multiple of 5: print "Buzz"
// - Multiple of 3 AND 5: print "FizzBuzz"
// - Otherwise: print the number

// BONUS: Save all output to an array and return it
// Expected array: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", ...]
let fizzBuzz = [];
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fizzBuzz.push("FizzBuzz");
  } else if (i % 3 === 0) {
    fizzBuzz.push("Fizz");
  } else if (i % 5 === 0) {
    fizzBuzz.push("Buzz");
  } else {
    fizzBuzz.push(i);
  }
}
console.log(fizzBuzz);

// soal 5 (46/50)
const classGroup = [
  { name: "Andi", score: [80, 85, 90, 75] },
  { name: "Bela", score: [92, 88, 95, 91] },
  { name: "Cici", score: [65, 70, 60, 72] },
  { name: "Doni", score: [78, 82, 79, 85] },
  { name: "Eva", score: [95, 98, 92, 96] },
];

//TODO:
// Use loops to:
// 1. Calculate each student's average score
let studentAverages = [];
for (const student of classGroup) {
  let totalScore = 0;
  for (const s of student.score) {
    totalScore += s;
  }
  const avg = totalScore / student.score.length;
  // 2. Display output in this format:
  //    "Andi: average 82.50 (PASSED)"
  //    "Cici: average 66.75 (FAILED)"
  //    etc. (passed if average >= 75)
  studentAverages.push({
    name: student.name,
    avg: avg,
  });
  console.log(
    `${student.name} has avg score: ${avg.toFixed(2)} ${avg >= 75 ? "(PASSED)" : "(FAILED)"}`,
  );
}
// 3. Calculate class average (average of all student averages)
const classAverage =
  studentAverages.reduce((acc, s) => acc + s.avg, 0) / studentAverages.length;
console.log(`Average Score from this class: ${classAverage}`);
// 4. Display who is above the class average
const aboveAverage = studentAverages.filter((s) => s.avg > classAverage);
aboveAverage.forEach((s) => {
  console.log(`${s.name}: ${s.avg.toFixed(2)}`);
});
