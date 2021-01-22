function saveLocal(allProjects) {
  localStorage.setItem("AllProjects", JSON.stringify(allProjects));
}

function restoreLocal() {
  let allProjects = JSON.parse(localStorage.getItem("AllProjects")) || [];
}

export { saveLocal, restoreLocal };
