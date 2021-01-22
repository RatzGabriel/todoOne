import { saveLocal } from "./localStorage";

const projectDom = (function () {
  const createProjectForm = function () {
    const projectDiv = document.getElementById("projects");
    const formProject = document.createElement("form");
    const labelProject = document.createElement("label");
    const inputProject = document.createElement("input");
    inputProject.id = "project-data";
    inputProject.placeholder = "Example Project";
    const buttonProject = document.createElement("button");
    const createProjectDiv = document.createElement("div");
    createProjectDiv.id = "projectDiv";
    buttonProject.id = "addProject";
    labelProject.appendChild(inputProject);
    labelProject.appendChild(buttonProject);
    formProject.appendChild(labelProject);
    projectDiv.appendChild(formProject);
    projectDiv.appendChild(createProjectDiv);
  };

  const createProjectTodo = function () {
    const toDoDiv = document.getElementById("toDo");
    const formtoDo = document.createElement("form");
    const labeltoDo = document.createElement("label");
    createInputElements(
      "form-items",
      "title",
      "title",
      "text",
      "Example Title",
      labeltoDo
    );
    createInputElements(
      "form-items",
      "desc",
      "desc",
      "text",
      "Example description",
      labeltoDo
    );
    createInputElements(
      "form-items",
      "due",
      "due",
      "date",
      "Example due Date 01.01.2020",
      labeltoDo
    );
    createInputElements(
      "form-items",
      "priority",
      "priority",
      "dropdown",
      "Example Priority 1-3",
      labeltoDo
    );
    formtoDo.appendChild(labeltoDo);
    toDoDiv.appendChild(formtoDo);
  };

  const createInputElements = function (
    classInput,
    nameInput,
    idInput,
    typeInput,
    placeHolderInput,
    append
  ) {
    const createInput = document.createElement("input");
    createInput.classList.add(classInput);
    createInput.name = nameInput;
    createInput.id = idInput;
    createInput.type = typeInput;
    createInput.placeholder = placeHolderInput;
    append.appendChild(createInput);
  };

  return {
    createProjectForm,
    createProjectTodo,
  };
})();

export { projectDom };
