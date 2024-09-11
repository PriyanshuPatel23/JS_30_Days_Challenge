const username = prompt("Enter your username to join the chat");

const socket = new WebSocket("ws://localhost:3000");

// Function to display messages in the chat box
function displayMessage(message, className) {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message", className);

  const messageText = document.createElement("p");
  messageText.textContent = message;
  messageContainer.appendChild(messageText);

  document.getElementById("messages").appendChild(messageContainer);
}

// Function to update the user list
function updateUserList(users) {
  const userList = document.getElementById("users");
  userList.innerHTML = ""; // Clear existing user list
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user;
    userList.appendChild(li);
  });
}

socket.onopen = function () {
  console.log("Connected to WebSocket server");

  // Send a message to the server to join the chat
  socket.send(JSON.stringify({ type: "join", username }));
};

socket.onmessage = function (event) {
  const data = JSON.parse(event.data);

  if (data.type === "userList") {
    updateUserList(data.users);
  } else if (data.type === "message") {
    displayMessage(`${data.username}: ${data.message}`, "received");
  }
};

document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const message = document.getElementById("messageInput").value;

  // Send the message to the server
  socket.send(JSON.stringify({ type: "message", message }));

  // Display the message in the sender's chat box
  displayMessage(`You: ${message}`, "sent");

  // Clear the input field
  document.getElementById("messageInput").value = "";
});
