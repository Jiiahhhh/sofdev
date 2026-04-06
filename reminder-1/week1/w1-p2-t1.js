function greetUser(name, timeOfDay) {
  return `Selamat ${timeOfDay}, ${name}`;
}

function calculateBMI(beratKg, tinggim) {
  return parseFloat(beratKg / (tinggim * tinggim)).toFixed(1);
}

function getBMIStatus(bmi) {
  if (bmi < 18.5) {
    return "Kurus";
  } else if (bmi < 24.9) {
    return "Normal";
  } else {
    return "Gemuk";
  }
}

console.log(greetUser("Ilal", "Pagi"));
console.log(calculateBMI(80, 1.7));
console.log(getBMIStatus(calculateBMI(80, 1.7)));
