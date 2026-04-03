// Analogy: Promise is like a "promise" in real life
// "I promise to give you the result later - whether it succeeds or fails"
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Data fetched successfully!"); //fulfilled
  } else {
    reject("An error occurred!"); // rejected
  }
});

// How to use Promise with .then() and .catch()
promise
  .then((result) => {
    console.log(result); // "Data fetched successfully!"
  })
  .catch((error) => {
    console.log(error);
  });
