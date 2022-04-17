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
    renderTasks(task) 
  });
}

function renderTasks(task) {
  const listItem = document.createElement("li");
  const description = document.createElement("p");
  
  listItem.setAttribute('id', task.task_id);
  description.setAttribute('id', task.task_id);

  listItem.setAttribute("class", "p-3 border shadow-sm item");
  description.innerText = task.task;

  const deleteBtn = document.createElement("button");
    // add the todo's id as a data attribute so we can reference later
    deleteBtn.setAttribute('id', task.task_id)
    deleteBtn.setAttribute('class', 'deleteBtn')
    const deleteimg = document.createElement('img')
    deleteimg.src = 'x-lg.svg'
    deleteBtn.append(deleteimg)

    listItem.addEventListener('click', onClick);
    deleteBtn.addEventListener("click", deleteTodo);

  listItem.append(description);
  listItem.append(deleteBtn);
  toDoContainer.append(listItem);
}

document.querySelectorAll('.item').forEach((item) => {
  console.log(item)
  item.addEventListener('click', (event) => {
    console.log('clicked');
  });
});


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
    renderTasks(data.data)
  })
}

function deleteTodo(event) {
  const task_id = event.target.id;
  const deleteurl = `http://localhost:9000/tasks/${task_id}`
  const options = {
    method: "DELETE"
  }
  fetch(deleteurl, options)
}

function onClick(event){
  console.log(event.target.id)
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
