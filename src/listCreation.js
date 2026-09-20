import { listInput } from "./index.js";
import { buttonAdd } from "./todoListUI.js";

let projectList = [];

class project {
    constructor(title,description,dueDate,notes,priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.notes = notes;
        this.priority = priority;
    }
}

function toAddProject() {
  let newProject = new project(title,description,dueDate,notes,priority);
  return projectList.push(newProject);
}

function toOpenForm() {

  listInput.showModal();   // Opens up the dialogue box present in HTML

}

function toShowProject() {
    for (let i = 0; i < projectList.length; i++) {}

   
}

function clearForm() {
    title.value = "";
    description.value = "";
    dueDate.value = "";
    notes.value = "";
    priority.value = "";
}

export {toOpenForm};