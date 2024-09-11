document.addEventListener("DOMContentLoaded", () => {
  const authForm = document.getElementById("auth-form");
  const postForm = document.getElementById("post-form");
  const authHeading = document.getElementById("auth-heading");
  const toggleForm = document.getElementById("toggle-form");
  const notificationsContainer = document.getElementById("notifications");
  const profilePic = document.getElementById("profile-pic");
  const usernameDisplay = document.getElementById("username");
  const logoutButton = document.getElementById("logout");
  const feed = document.getElementById("feed");

  let loggedInUser = getUser();

  function updateUI() {
    if (loggedInUser) {
      document.getElementById("auth").classList.add("hidden");
      postForm.classList.remove("hidden");
      usernameDisplay.textContent = loggedInUser.username;
      profilePic.src = loggedInUser.profilePic || "default-profile.png";
      displayPosts();
    } else {
      document.getElementById("auth").classList.remove("hidden");
      postForm.classList.add("hidden");
    }
  }

  function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    notificationsContainer.appendChild(notification);
    setTimeout(() => notificationsContainer.removeChild(notification), 5000);
  }

  function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  function getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  function handleAuthSubmit(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (authHeading.textContent === "Login") {
      const user = getUser();
      if (user && user.username === username && user.password === password) {
        loggedInUser = user;
        saveUser(user);
        updateUI();
      } else {
        alert("Invalid credentials");
      }
    } else {
      const newUser = { username, email, password, profilePic: "" };
      saveUser(newUser);
      loggedInUser = newUser;
      updateUI();
    }
  }

  function handlePostSubmit(event) {
    event.preventDefault();
    const postText = document.getElementById("post-text").value;
    const postImage = document.getElementById("post-image").files[0];
    const postId = Date.now();

    if (postText) {
      const post = {
        id: postId,
        text: postText,
        image: postImage ? URL.createObjectURL(postImage) : "",
        user: loggedInUser.username,
        likes: 0,
        comments: [],
      };
      const posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.push(post);
      localStorage.setItem("posts", JSON.stringify(posts));
      displayPosts();
      showNotification(`${loggedInUser.username} created a new post`);
    }

    document.getElementById("post-text").value = "";
    document.getElementById("post-image").value = "";
  }

  function displayPosts() {
    feed.innerHTML = "";
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "post";
      postElement.innerHTML = `
                <p><strong>${post.user}</strong></p>
                <p>${post.text}</p>
                ${
                  post.image ? `<img src="${post.image}" alt="Post Image">` : ""
                }
                <div class="post-buttons">
                    <button onclick="likePost(${post.id})">Like (${
        post.likes
      })</button>
                    <button onclick="commentPost(${post.id})">Comment (${
        post.comments.length
      })</button>
                </div>
            `;
      feed.appendChild(postElement);
    });
  }

  function likePost(postId) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const post = posts.find((post) => post.id === postId);
    if (post) {
      post.likes += 1;
      localStorage.setItem("posts", JSON.stringify(posts));
      displayPosts();
      showNotification(`${post.user} received a new like`);
    }
  }

  function commentPost(postId) {
    const comment = prompt("Enter your comment");
    if (comment) {
      const posts = JSON.parse(localStorage.getItem("posts")) || [];
      const post = posts.find((post) => post.id === postId);
      if (post) {
        post.comments.push(comment);
        localStorage.setItem("posts", JSON.stringify(posts));
        displayPosts();
        showNotification(`${post.user} received a new comment`);
      }
    }
  }

  authForm.addEventListener("submit", handleAuthSubmit);
  document
    .getElementById("new-post-form")
    .addEventListener("submit", handlePostSubmit);
  toggleForm.addEventListener("click", () => {
    if (authHeading.textContent === "Login") {
      authHeading.textContent = "Register";
      toggleForm.textContent = "Login";
    } else {
      authHeading.textContent = "Login";
      toggleForm.textContent = "Register";
    }
  });

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("user");
    loggedInUser = null;
    updateUI();
  });

  updateUI();
});
