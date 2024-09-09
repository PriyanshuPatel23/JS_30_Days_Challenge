const socket = new WebSocket('ws://localhost:8080');
const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const username = localStorage.getItem('username');

sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value;
    if (message.trim() !== "") {
        const data = { username, message };
        socket.send(JSON.stringify(data));
        messageInput.value = ''; // Clear input after sending
    }
}

socket.onmessage = (event) => {
    const { username, message } = JSON.parse(event.data);
    displayMessage(username, message);
};

function displayMessage(username, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to bottom
}
