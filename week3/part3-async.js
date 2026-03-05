// cara lama: promise chain (kadang susah dibaca kalau panjang)
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => res.json())
  .then((data) => {
    // gunakan data
  })
  .catch((err) => console.log(err));

// cara baru: Async/ Await (lebih bersih, mirip synchronous code)
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  // gunakan data
}

// async function selalu return Promise
async function greet() {
  return "Halo!";
}

greet().then((msg) => console.log(msg));

async function getUser(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    if (!response.ok) {
      throw new Error(`User tidak ditemukan (${response.status})`);
    }
    const user = await response.json();
    console.log(`Nama: ${user.name}`);
    console.log(`Email: ${user.email}`);
  } catch (error) {
    console.log("Terjadi errror: ", error.message);
  }
}

getUser(1);
getUser(999);

// async function loadUsers() {
//   const container = document.getElementById("user-list");

//   // 1. Show loading state
//   container.innerHTML = "<p>Memuat data...";

//   try {
//     // 2. Fetch data
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();

//     container.innerHTML = users
//       .map(
//         (user) => `<div class="user-card">
//                 <h3>${user.name}</h3>
//                 <p>${user.email}</p>
//             </div>`,
//       )
//       .join("");
//   } catch (error) {
//     container.innerHTML = `<p class="error">Gagal memuat: ${error.message}</p>`;
//   }
// }

// loadUsers();

// parallel - total ~1 detik (jalan bersamaan)
async function parallel() {
  const [users, posts] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()),
  ]);
  console.log(`${users.length} users, ${posts.length} posts`);
}

parallel();
