import { projectDom } from "./DOMForms";
import { createDom } from "./DOMElements";
import { logic } from "./jslogic";
import { saveLocal } from "./localStorage";

projectDom.createProjectForm();
projectDom.createProjectTodo();

createDom.createProjectStart();
createDom.createToDoArray("Title", "Description", "dueDate", "Priority");
createDom.createToDo(
  "Test Title",
  "Test Description",
  "Test Date",
  "Test Priority"
);

createDom.createToDo(
  "Test Title2",
  "Test Description2",
  "Test Date2",
  "Test Priority2"
);

const project = document.getElementById("addProject");
project.addEventListener("click", function (e) {
  e.preventDefault();
  logic.addProjects();
});
