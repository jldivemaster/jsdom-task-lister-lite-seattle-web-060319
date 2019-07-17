document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener('submit',function(e){
    e.preventDefault();
      const newTaskName = document.querySelector("#new-task-description").value;
      document.querySelector("#new-task-description").value = "";
      const dropdownSelect = document.querySelector("#prio-dropdown").value;
      const newTaskColor = prioColor(dropdownSelect);
      makeTask(newTaskName, newTaskColor);
  });


});


function makeTask(taskName,taskColor){
  const newTask = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButtonCreate(deleteButton , taskName);
  const editButton = document.createElement("button");
  editButtonCreate(editButton , taskName);
  newTask.innerText = taskName;
  newTask.style.color = taskColor;
  newTask.id = taskName + "-id";
  const tasksList = document.getElementById("tasks");
  tasksList.appendChild(newTask);
  newTask.appendChild(deleteButton);
  newTask.appendChild(editButton);

}

function deleteButtonCreate(buttonElement, taskName) {
  buttonElement.innerText = "x";
  buttonElement.id = taskName + "-";
  buttonElement.addEventListener('click',function(e){
    const taskId = e.target.id + "id"
    const task = document.getElementById(taskId)
    task.remove();
  });
}

function editButtonCreate(buttonElement, taskName) {
  buttonElement.innerText = "edit";
  buttonElement.id = taskName + "-i";
  buttonElement.addEventListener('click',function(e){
    const taskId = e.target.id + "d"
    const task = document.getElementById(taskId)
    task.childNodes[0].textContent = document.querySelector("#new-task-description").value;
    const newColor = prioColor(document.querySelector("#prio-dropdown").value);
    //debugger;
    task.style.color = newColor
  });
}

function prioColor(dropdownSelect) {
let newTaskColor = "red";
      switch(dropdownSelect) {
        case 'high':
          newTaskColor = 'red'
          break;
        case 'medium':
          newTaskColor = 'yellow'
          break;
        default:
          newTaskColor = 'green'

      }
      return newTaskColor;
    }
