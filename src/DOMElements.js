import { Todo, Project } from "./class";
import { logic } from "./jslogic";
import { saveLocal } from "./localStorage";

let allProjects = [];

const createDom = (function () {
  const createProjectStart = function () {
    let Singleproject = new Project("test");
    allProjects.push(Singleproject);
    console.log(allProjects);
    saveLocal(allProjects);
    createProjectDom("test");
  };

  const createProjectDom = function (title) {
    const projectDiv = document.getElementById("projectDiv");
    const projectElement = document.createElement("p");
    projectElement.classList.add("projectTitle");
    projectElement.innerText = title;
    projectElement.addEventListener("click", logic.projectClick);
    projectDiv.appendChild(projectElement);
  };

  const createToDoArray = function (title, desc, due, priority) {
    // allProjects = JSON.parse(localStorage.getItem("AllProjects")) || [];
    let todo = new Todo(title, desc, due, priority, "", "");
    allProjects[0].todos.push(todo);
    console.log("hi2");
    console.log(allProjects);
    saveLocal(allProjects);
  };

  const createToDo = function (titleInput, descInput, dueInput, prioInput) {
    const todoElement = document.getElementById("toDo");

    const todoDiv = document.createElement("div");
    const title = document.createElement("p");
    const description = document.createElement("p");
    const due = document.createElement("p");
    const priority = document.createElement("p");

    title.innerText = titleInput;
    description.innerText = descInput;
    due.innerText = dueInput;
    priority.innerText = prioInput;

    todoDiv.appendChild(title);
    todoDiv.appendChild(description);
    todoDiv.appendChild(due);
    todoDiv.appendChild(priority);
    todoElement.appendChild(todoDiv);
  };

  return { createProjectStart, createProjectDom, createToDoArray, createToDo };
})();

export { createDom };
