// Brower JS Code

const url = "http://localhost:9000/tasks"

document.querySelector('#create-task-form').addEventListener('submit', createTask)

// function renderTasks(task){
//     const listItem = document.createElement("li");
//     listItem.id = `task:${task.id}`;
//     const description = document.createElement('p');
//     description.innerText = task.name;
//     description.id = `description:${task.id}`;
//     listItem.append('description')
// }

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
