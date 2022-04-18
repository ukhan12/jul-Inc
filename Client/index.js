// Brower JS Code
const url = "http://localhost:9000/tasks";
const toDoContainer = document.getElementById("to-do-container");

document.getElementById("create-task-form").addEventListener("submit", createTask);

function initialFetchTasks() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => iterateThroughData(data.data));
}
initialFetchTasks();

function iterateThroughData(tasks) {
  console.log(tasks);
  tasks.forEach(task => {
    renderTask(task) 
  });
}

function renderTask(task) {
  const listItem = document.createElement("li");
  const description = document.createElement("p");
  
  listItem.setAttribute('id', task.task_id);
  description.setAttribute('id', task.task_id);

  listItem.setAttribute("class", "p-3 border shadow-sm item");
  description.innerText = task.task;

  const deleteBtn = document.createElement("button");
  const updateBtn = document.createElement("button");

    // add the todo's id as a data attribute so we can reference later
    // deleteBtn.setAttribute('id', task.task_id);
    deleteBtn.setAttribute('class', 'deleteBtn');
    // updateBtn.setAttribute('id', task.task_id); // This is where we are storing the task_id for the update function
    updateBtn.setAttribute('class', 'updateBtn');

    updateBtn.setAttribute('data-bs-toggle', 'modal')
    updateBtn.setAttribute('data-bs-target', '#updateModal')

    const deleteimg = document.createElement('img');
    const updateimg = document.createElement('img');
    updateimg.src = 'pencil-fill.svg'
    updateimg.setAttribute('id', task.task_id);
    updateBtn.append(updateimg)
    deleteimg.src = 'x-lg.svg'
    deleteimg.setAttribute('id', task.task_id)
    deleteBtn.append(deleteimg)

    // listItem.addEventListener('click', onClick);
    deleteimg.addEventListener("click", deleteTodo);
    updateimg.addEventListener('click', updateTask);

  listItem.append(description);
  listItem.append(deleteBtn, updateBtn);
  toDoContainer.append(listItem);
}

function createTask(event) {
  event.preventDefault();
  const value = event.target.description.value
  console.log(value)
  const options = {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    mode: "cors",
    body: JSON.stringify({
      task: value
    })
  }
  fetch(url, options)
  .then(res => res.json())
  .then(data => {
    renderTask(data.data[data.data.length-1])
  })
}



// Form submitted event listener
document.getElementById('update-task-form').addEventListener('submit', update)

// This function is where the task_id is being stored and it's called when the user clicks on the updateBtn
function updateTask(event){
  event.preventDefault();
  const task_id = event.target.id
  update(task_id)
}

// This where the input value is being saved but it isn't accessible from the putside function
function update(event, id){
  event.preventDefault();
  const value = event.target.update.value
  console.log(value)
  console.log(id)
  const patchurl = `http://localhost:9000/tasks/${task_id}`
  const options = {
    method: "PATCH", 
    headers: {
      'Content-type': 'application/json'
    },
    mode: "cors",
    body: JSON.stringify({
      task: value // Need to get the input value somehow
    })
  }
  fetch(patchurl, options)
}


function deleteTodo(event) {
  const task_id = event.target.id;
  const deleteurl = `http://localhost:9000/tasks/${task_id}`
  const options = {
    method: "DELETE"
  }
  fetch(deleteurl, options)
}

// DARK MODE
let toggle = false;

function darkFunction(){
  const el = document.body
  const btnImage = document.getElementById('img');
  const toggleBtn = document.getElementById('widget-light');
  const toggleBtn2 = document.getElementById('widget-light2');
  const addBtn = document.getElementById('add-btn');
  const header = document.getElementById('task-man')
  const offCanvas = document.getElementById('offcanvasWithBothOptions')
  const modal = document.getElementById('modal-task')
  el.classList.toggle('dark-mode')
  toggleBtn.classList.toggle('widget-dark');
  toggleBtn2.classList.toggle('widget-dark');
  addBtn.classList.toggle('widget-dark2');
  header.classList.toggle('task-man-dark')
  offCanvas.classList.toggle('bg-dark')
  modal.classList.toggle('bg-dark');
  if(!toggle){
    toggle = true;
    btnImage.src = "moon-fill.svg"
  }
  else {
    toggle = false;
    btnImage.src = "brightness-high-fill.svg"
  }
}
