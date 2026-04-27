// Soal 1 (4/5)
// Type your answer here
const isLoggedIn = true;

const checkLogin = new Promise((resolve, reject) => {
  if (isLoggedIn) {
    resolve("Selamat datang, Ilal!");
  } else {
    reject("Kamu belum login!");
  }
});

checkLogin
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

//Soal 2 (5/5)
// 1️⃣ Synchronous → runs immediately
console.log("A");

const myPromise = new Promise((resolve) => {
  // 2️⃣ Synchronous → code inside Promise constructor runs immediately
  console.log("B");

  // resolve() is called instantly, but .then() can't run yet
  // JS puts .then() in a queue and says "wait until all synchronous code is done"
  resolve("C");
});

// 4️⃣ .then() is registered but goes into the async queue — not running yet
// JS sees this and says "I'll come back to you after synchronous code is done"
myPromise.then((val) => console.log(val));

// 3️⃣ Synchronous → runs immediately (doesn't wait for .then())
console.log("D");

// Soal 3 (4/5)
const getData = new Promise((resolve, reject) => {
  const score = 85;
  if (score >= 75) {
    resolve("Passed!"); // something's wrong here
  } else {
    reject("Failed!"); // and here
  }
});
getData.then((result) => console.log(result)).catch((err) => console.log(err));

// Soal 4 (3/5)
// Hint: setTimeout(callback, milliseconds)
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
// Test:
delay(2000).then(() => console.log("2 seconds have passed!"));

// soal 5 (5/5)
const startValue = Promise.resolve(10);

startValue
  .then((num) => {
    return num * 2;
  })
  .then((num) => {
    return num + 5;
  })
  .then((num) => {
    return console.log(num);
  });
