// Brower JS Code
const url = "http://localhost:9000/tasks";

function initialFetchTasks() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => iterateThroughData(data.data));
}
initialFetchTasks();

function iterateThroughData(tasks) {
  console.log(tasks);
  tasks.forEach(renderTasks);
}

function renderTasks(task) {
  const listItem = document.createElement("div");
  const description = document.createElement("div");
  const toDoContainer = document.getElementById("to-do-container");

  listItem.setAttribute('id', task.task_id);
  listItem.setAttribute("class", "col item");
  listItem.setAttribute("draggable", "true");

  description.setAttribute("class", "p-3 border bg-light");
  description.innerText = task.task;

  listItem.append(description);
  toDoContainer.append(listItem);
}

let item = document.getElementsByClassName(".item")

item.addEventListener('click', clickedTask(item))

function clickedTask(item){
  let task_id = item.id
  console.log("task has been clicked")
  console.log(task_id)
} 

document.getElementById("create-task-form").addEventListener("submit", createTask);

function createTask(event) {
  event.preventDefault();
  const taskItem = document.getElementById("description").value;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({ task: taskItem }),
  });
}

  // DRAGGABLE TASK ITEM FUNCTIONALITY
  // listItem.addEventListener('dragstart', dragStart);
  // function dragStart(e) {
  //   e.dataTransfer.setData('text/plain', e.target.id);
  //   setTimeout(() => {
  //       e.target.classList.add('hide');
  //   }, 0);
  // }
  // /* drop targets */
  // const boxes = document.querySelectorAll('.box-container');

  // boxes.forEach(box => {
  //   box.addEventListener('dragenter', dragEnter)
  //   box.addEventListener('dragover', dragOver);
  //   box.addEventListener('dragleave', dragLeave);
  //   box.addEventListener('drop', drop);
  // });

  // function dragEnter(e) {
  //   e.preventDefault();
  //   e.target.classList.add('drag-over');
  // }

  // function dragOver(e) {
  //   e.preventDefault();
  //   e.target.classList.add('drag-over');
  // }

  // function dragLeave(e) {
  //   e.target.classList.remove('drag-over');
  // }

  // function drop(e) {
  //   e.target.classList.remove('drag-over');

  //   // get the draggable element
  //   const id = e.dataTransfer.getData('text/plain');
  //   const draggable = document.getElementById(id);

  //   // add it to the drop target
  //   e.target.appendChild(draggable);

  //   // display the draggable element
  //   draggable.classList.remove('hide');
  // }