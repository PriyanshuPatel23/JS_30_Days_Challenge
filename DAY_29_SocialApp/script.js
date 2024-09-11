document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    localStorage.setItem("loggedInUser", username);
    document.getElementById("login-container").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  }
});

const posts = [];

document.getElementById("post-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const postText = document.getElementById("post-text").value;
  const postImage = document.getElementById("post-image").files[0];
  const username = localStorage.getItem("loggedInUser");
  const timestamp = new Date().toLocaleString();

  let imageUrl = "";
  if (postImage) {
    imageUrl = URL.createObjectURL(postImage); // Get the temporary image URL for display
  }

  const post = {
    username,
    postText,
    imageUrl,
    timestamp,
    likes: 0,
    comments: [],
  };
  posts.push(post);
  document.getElementById("post-text").value = ""; // Clear text area
  displayPosts();
});

function displayPosts() {
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
        <h3>${post.username}</h3>
        ${post.imageUrl ? `<img src="${post.imageUrl}" alt="Post Image">` : ""}
        <p>${post.postText}</p>
        <div class="actions">
          <button onclick="likePost(${posts.indexOf(post)})">Like (${
      post.likes
    })</button>
        </div>
        <div class="comments">
          <input type="text" placeholder="Add a comment" onkeypress="addComment(event, ${posts.indexOf(
            post
          )})">
          <div class="comment-list">${post.comments
            .map((comment) => `<p>${comment}</p>`)
            .join("")}</div>
        </div>
      `;
    postsContainer.appendChild(postElement);
  });
}

function likePost(index) {
  posts[index].likes++;
  displayPosts();
}

function addComment(event, index) {
  if (event.key === "Enter") {
    posts[index].comments.push(event.target.value);
    event.target.value = "";
    displayPosts();
  }
}
