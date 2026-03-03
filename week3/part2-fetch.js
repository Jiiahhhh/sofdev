// Anatomy Fetch Response
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    // response is Response object, not data!
    console.log(response.status); // 200
    console.log(response.ok); // true

    return response.json(); // convert to js object
  })
  .then((user) => {
    // Now data received
    console.log(user.name);
    console.log(user.email);
  });

// Handle HTTP Errors correctly
fetch("https://jsonplaceholder.typicode.com/users/999")
  .then((response) => {
    if (!response.ok) {
      // Not automatically throw error!
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error: ", error.message));

// Example
function getUser(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("User not found!");
      }
      return response.json();
    })
    .then((user) => {
      console.log(`Name: ${user.name}`);
      console.log(`Email: ${user.email}`);
      console.log(`City: ${user.address.city}`);
    })
    .catch((error) => {
      console.log("Failed: ", error.message);
    });
}

getUser(1);

// Showing data to DOM
function displayPosts() {
  const container = document.getElementById("post-container");
  container.innerHTML = "<p>Loading...</p>"; // show loading state

  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((response) => response.json())
    .then((posts) => {
      container.innerHTML = ""; // clear loading

      posts.forEach((post) => {
        const card = document.createElement("div");
        card.className = "post-card";
        card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch((error) => {
      container.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

displayPosts();
