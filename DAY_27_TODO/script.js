// Select necessary elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
let tasks = [];
let editingTaskId = null;

// Handle form submission for adding/editing tasks
taskForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-desc').value;
    const dueDate = document.getElementById('task-date').value;

    if (editingTaskId === null) {
        // Add new task
        const task = {
            id: Date.now(), // Unique ID for each task
            title,
            description,
            dueDate
        };
        tasks.push(task);
        displayTasks();
    } else {
        // Update existing task
        const taskIndex = tasks.findIndex(task => task.id === editingTaskId);
        tasks[taskIndex] = { id: editingTaskId, title, description, dueDate };
        editingTaskId = null; // Reset after editing
        taskForm.querySelector('button').innerText = 'Add Task'; // Reset button text
        displayTasks();
    }

    taskForm.reset(); // Reset form after adding/updating
});

// Function to display tasks
function displayTasks() {
    taskList.innerHTML = ''; // Clear the current list

    tasks.forEach((task) => {
        // Create task item
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <div class="task-content">
                <p class="task-title">${task.title}</p>
                <p class="task-desc">Task Description: ${task.description}</p>
                <p class="task-date">Due Date: ${task.dueDate}</p>
            </div>
            <div class="task-actions">
                <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

// Function to edit a task
function editTask(id) {
    const taskToEdit = tasks.find(task => task.id === id);
    document.getElementById('task-title').value = taskToEdit.title;
    document.getElementById('task-desc').value = taskToEdit.description;
    document.getElementById('task-date').value = taskToEdit.dueDate;
    
    editingTaskId = id;
    taskForm.querySelector('button').innerText = 'Update Task'; // Change button text for editing
}

// Function to delete a task
function deleteTask(id) {
    const confirmDelete = confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
        tasks = tasks.filter(task => task.id !== id); // Remove task from array
        displayTasks(); // Refresh task list
    }
}
