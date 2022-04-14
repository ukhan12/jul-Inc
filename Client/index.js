// Brower JS Code

const url = "http://localhost:9000/tasks"
      
document.getElementById('create-task-form').addEventListener('submit', createTask)

function createTask(event){
  event.preventDefault()
  const desc = document.getElementById('description').value

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify({task: desc})
  })
}

function renderTasks(task){
  const listItem = document.createElement('div')
  listItem.setAttribute("id", "to-do")
  listItem.setAttribute("class", "col, item,")
  listItem.setAttribute("draggable", "true")

  const description = document.createElement('div')
  description.setAttribute("class", "p-3 border bg-light")
  description.setAttribute("id", "content-box")
  // description.setAttribute("draggable", "true")
  
  console.log(task)
  description.innerText = task.Task
  
  listItem.append(description)

  const toDoContainer = document.getElementById('to-do-container')
  toDoContainer.append(listItem)

  
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
} 

function iterateThroughData(tasks){
  console.log(tasks)
  tasks.forEach(renderTasks)
}

function initialFetchTasks(){
  fetch(url)
  .then(res => res.json())
  .then(data => iterateThroughData(data.data))
}
initialFetchTasks()



