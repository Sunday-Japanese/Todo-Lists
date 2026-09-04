import { buttonAdd } from "./todoListUI.js";

class todo {
    constructor(title,description,dueDate,priority,notes,checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
    }
}

let priorityOne = new todo("Todo List","make a todo list application on website","personal pace","Learning something new","let it take time, but ensure to absorb the knowledge","completing the project and adding it to odin project");

// Testing constructor function created by class
console.log(priorityOne.title); 

function toAddTodoList() {
    const listButton = document.createElement("button");
    const todoList = document.querySelector(".todoList");

    listButton.classList.add("listButton");

    todoList.appendChild(listButton);
}


export {priorityOne,toAddTodoList};