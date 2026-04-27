/* = = = = = = = = = =
 1. What is Function Composition?
= = = = = = = = = = */
console.log("=== What is Function Composition? ===");

// Without composition - nested and hard to read
function formatStudentName(name) {
  return name.trim();
}

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function addTitle(name) {
  return "Mr. " + name;
}

function pipe(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
}

const formatName = pipe(formatStudentName, capitalize, addTitle);
const result = addTitle(capitalize(formatStudentName(" Ilal ")));
console.log(result);
console.log(formatName(" Ilal "));

/* = = = = = = = = = =
 2. pipe vs compose
= = = = = = = = = = */
console.log("=== pipe vs compose ===");

function pipe(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
}

const double = (n) => n * 2;
const addTen = (n) => n + 10;
const square = (n) => n * n;

const transform = pipe(double, addTen, square);
// Execution order: double -> addTen -> square
// double(5) = 10 -> addTen(10) = 20 -> square(20) = 400
console.log(transform(5));

function compose(...fns) {
  return function (value) {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
}

const transformx = compose(double, addTen, square);
// Execution order: square -> addTen -> double
// square(5) = 25 -> addTen(25) = 35 -> double(35) = 70
console.log(transformx(5));
