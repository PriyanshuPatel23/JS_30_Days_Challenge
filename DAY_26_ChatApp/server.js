const express = require("express");
const bodyParser = require("body-parser");
const WebSocket = require("ws");
const cors = require("cors"); // Import CORS middleware

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

let users = []; // Array to store users
let activeUsers = []; // To store connected clients

// Registration endpoint
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ username, password });
  res.status(200).json({ message: "Registration successful" });
});

// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

// Serve static files (HTML, CSS, JS)
app.use(express.static("public"));

// Start HTTP server
const server = app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});

// WebSocket server setup
wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  let userName;

  ws.on("message", (message) => {
    const data = JSON.parse(message);

    // Handle new user joining
    if (data.type === "join") {
      userName = data.username;
      activeUsers.push(userName);

      // Broadcast updated user list
      broadcast({
        type: "userList",
        users: activeUsers,
      });
    }

    // Handle user message
    if (data.type === "message") {
      broadcast({
        type: "message",
        username: userName,
        message: data.message,
      });
    }
  });

  ws.on("close", () => {
    // Remove user from active users when they disconnect
    activeUsers = activeUsers.filter((user) => user !== userName);
    broadcast({
      type: "userList",
      users: activeUsers,
    });
  });

  // Broadcast to all connected clients
  function broadcast(data) {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  }
});
