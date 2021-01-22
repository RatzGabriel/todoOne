import { Project } from "./class";
import { createDom } from "./DOMElements";
import { saveLocal, restoreLocal } from "./localStorage";

const logic = (function () {
  const addProjects = function () {
    let allProjects = [];
    restoreLocal();
    console.log("hi");
    console.log(allProjects);
    const getProjectName = document.getElementById("project-data");
    for (let i = 0; i < allProjects.length; i++) {
      if (allProjects[i].status == true) {
        allProjects[i].status = false;
      }
    }

    if (getProjectName.value !== "") {
      let project = new Project(getProjectName.value);
      allProjects.push(project);
      createDom.createProjectDom(getProjectName.value);
      getProjectName.value = "";
    }
  };

  const projectClick = function () {};
  return { addProjects, projectClick };
})();

export { logic };
