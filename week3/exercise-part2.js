// // Soal 1
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     users.forEach((data) => {
//       console.log(`id: ${data.id}, name: ${data.name}, email: ${data.email}`);
//     });
//   });

// // Soal 2
// function getPostsByUser(userId) {
//   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("User not found!");
//       }
//       return response.json();
//     })
//     .then((posts) => {
//       console.log(`Count posts: ${posts.length}`);
//       posts.forEach((data) => {
//         console.log(data.title);
//       });
//     });
// }

// getPostsByUser(1);

// // Soal 3
// fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }
//   })
//   .catch((error) => console.log("Error: ", error.message));

// // Soal 4
// function displayTodos() {
//   fetch("https://jsonplaceholder.typicode.com/posts/todos?userId=1").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP Error: ${response.status}`);
//       }
//     },
//   );
// }

// Soal 5
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then((response) => response.json())
      .then((posts) => {
        return { name: user.name, title: posts[0].title };
      });
  })
  .then(({ name, title }) => {
    console.log(`Post pertama dari ${name}: ${title}`);
  })
  .catch((error) => console.log("Error:", error));
