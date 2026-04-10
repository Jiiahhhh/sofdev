const scores = [72, 85, 91, 60, 78, 95, 83, 67, 88, 74];

const passed = scores.filter((s) => s >= 75);
const doubled = scores.map((s) => s * 2);
const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
const average = totalScore / scores.length;
const highest = Math.max(...scores);

console.log(passed);
console.log(doubled);
console.log(average);
console.log(highest);
console.log(scores);
