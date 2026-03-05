// Soal 1
// Ubah ini menjadi async/await
function getPost(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      if (!response.ok) throw new Error("Post not found");
      return response.json();
    })
    .then((post) => console.log(post.title))
    .catch((error) => console.log("Error:", error.message));
}

getPost(1);

async function getPost2(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error("Post not found");

    const data = await res.json();
    console.log(data.title);
  } catch (error) {
    console.log("Error", error.message);
  }
}

getPost2(1);

// Soal 2
async function getUserWithPosts(userId) {
  try {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    const user = await userResponse.json();
    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );
    const posts = await postResponse.json();

    console.log(`User: ${user.name}`);
    console.log(`Total posts: ${posts.length}`);
    console.log("First 3 posts:");
    posts.slice(0, 3).forEach((post) => console.log(`-${post.title}`));
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUserWithPosts(1);

// Soal 3
async function getUserSummary(userId) {
  try {
    const [user, posts, todos] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((r) =>
        r.json(),
      ),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(
        (r) => r.json(),
      ),
      fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`).then(
        (r) => r.json(),
      ),
    ]);

    const completedTodos = todos.filter((t) => t.completed).length;

    console.log(`User: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Total Posts: ${posts.length}`);
    console.log(`Todos Selesai: ${completedTodos}/${todos.length}`);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUserSummary(1);

// Soal 4
async function searchUsers(keyword) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users
      .filter((user) => user.name.toLowerCase().includes(keyword.toLowerCase()))
      .map((user) => ({ name: user.name, email: user.email }));
  } catch (error) {
    console.log("Error:", error.message);
    return [];
  }
}

searchUsers("a").then((result) => console.log(result));
