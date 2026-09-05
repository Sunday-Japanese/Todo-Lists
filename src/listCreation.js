import { buttonAdd,closeButton } from "./todoListUI.js";

class todo {
    constructor(title,description,dueDate,notes,priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.notes = notes;
        this.priority = priority;
    }
}

//let priorityOne = new todo("Todo List","make a todo list application on website","personal pace","Learning something new","let it take time, but ensure to absorb the knowledge","completing the project and adding it to odin project");

// Testing constructor function created by class
console.log();

// A feature which adds buttons containing todoList
function toAddTodoList() {


    const checkBox = document.createElement("input");
    const deleteButton = document.createElement("button"); // Delete list button
    const listButton = document.createElement("button");   // Main list button
    

    const todoList = document.querySelector(".todoList");
    const listInput = document.querySelector(".listInput");

    
    listInput.showModal();   // Opens up the dialogue box present in HTML

    checkBox.type = "checkbox";

    listButton.classList.add("listButton");
    deleteButton.classList.add("deleteButton");
    checkBox.classList.add("input");
    

    deleteButton.innerText = "-";

    todoList.appendChild(listButton);
    listButton.appendChild(checkBox);
    listButton.appendChild(deleteButton);
    
    

    // A feature which allows one to delete a certain todo list button
    deleteButton.addEventListener("click",() => {
        listButton.remove();
  })

  // A feature to close list button
  closeButton.addEventListener("click",() => {
    listInput.close()
  })

  return {listButton};
}





export {toAddTodoList};