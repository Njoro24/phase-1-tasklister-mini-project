document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

// Select form and task list
const taskForm = document.getElementById("create-task-form");
const taskInput = document.getElementById("new-task-description");
const taskList = document.createElement("ul");
document.body.appendChild(taskList);

//Additional input fields
const dueDateInput = document.createElement("input");
dueDateInput.type = "date";
dueDateInput.id = "due-date";
taskForm.appendChild(dueDateInput);

const userInput = document.createElement("input");
userInput.type = "text";
userInput.id = "user";
userInput.placeholder = "Assigned To";
taskForm.appendChild(userInput);

//Select priority dropdown from HTMl
const priorityDropdown = document.getElementById("priority");

// Listen for form submission
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    const taskText = taskInput.value.trim(); // Get input value
    const dueDate = dueDateInput.value;
    const assignUser = userInput.value.trim()
    const priority = priorityselect.value;

    if (taskText === "") return; // Ignore empty tasks


    // Create a new list item
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Append task to list
    taskList.appendChild(taskItem);

    // Clear input field after submission
    taskInput.value = "";
  });

  //set priority color
  if (priority === "High") {
    taskItem.style.color = "red";
  }
  else if (priority === "Medium") {
    taskItem.style.color = "yellow";
  }
  else if (priority === "Low") {
    taskItem.style.color = "green";
  }
  else {
    taskItem.style.color = "black";
  }

  //append task to list
  taskList.appendChild(taskItem);

  //Delete button
  taskItem.querySelector("edit-btn").addEventListener("click", () => {
    const newtext = prompt("Edit Task", taskItem.textContent);
    if (newText) taskitem.querySelector("strong").textContent = newText;
  });

  // clears input fields after subssion
  taskInput.value = "";
  dueDateInput.value = "";
  userInput.value = "";
  priorityDropdown.value = "Low";

  //sorting functions
  const sortButton = document.getElementById("sort-button");
  sortButton.textContent = "Sort by Due Date";
  document.body.insertBefore(sortButton, taskList);

  sortButton.addEventListener("click", () => {
    const taskArray = Array.from(taskList.children);
    taskArray.sort((a, b) => {
      const priorityOrder = {
        High: 3,
        Medium: 2,
        Low: 1,
      };
      return priorityOrder[a.stylecolor] - priorityOrder[b.style.color];
    }
    );
    taskArray.forEach((task) => taskList.appendChild(task));
  }
  );  

  