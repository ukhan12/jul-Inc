const getProjectsUrl = "http://localhost:9000/projects"


//project drop down button feature
const projectsButton = document.getElementsByClassName("nav-item dropdown");

function fetchProjects(){
  fetch(getProjectsUrl)
  .then(res => res.json())
  .then(data => {
    iterateThroughProjects(data.data)
    console.log(data.data);
  }); 
}

function iterateThroughProjects(projects){
  projects.forEach((projects) => {
    showProjects(projects.description);
  });

}

const cardsContainer = document.getElementById("cards");
// render projects onto the page
function showProjects(project){
  const cardDiv = document.createElement("a");
  cardDiv.setAttribute("class", "card");
  const taskPage = "home.html"
  cardDiv.href = taskPage;

  const cardBody = document.createElement("div");
  cardBody.setAttribute = ("class", "container");
  

  const cardTitle = document.createElement("a");
  cardTitle.setAttribute("class", "font")
//   const homePage = "home.html"
//   cardTitle.href = homePage;
  cardTitle.innerText = project;

  cardsContainer.appendChild(cardDiv)
  cardDiv.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  projectCardEventListener(cardDiv);
  return project;
}
// /projects/3
fetchProjects();

function projectCardEventListener(project){
  project.addEventListener("click", () =>{
    console.log("works");
  });
}












 
//Add project btn. 
//create event listener and post a new project when add button is clicked

// function postProject(){
//   fetch(url, {
//     method: "POST",
//     headers: {
//       "content-type": "application.json",
//     },
//     mode: "cors",
//     body: JSON.stringify({task: taskItem})
//   })
// }

// function addProjectClickEvent(){
//   addProjectBtn.addEventListener("click",()=>{
//     console.log("works");
//   })
// }


// addProjectClickEvent();