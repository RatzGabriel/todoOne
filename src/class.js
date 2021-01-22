class Project {
  constructor(title) {
    this.title = title;
    this.status = true;
    this.todos = [];
  }
}

class Todo {
  constructor(title, desc, due, priority, notes, check) {
    this.title = title;
    this.desc = desc;
    this.due = due;
    this.priority = priority;
    this.notes = notes || "";
    this.check = check || "";
  }
}

export { Project, Todo };
