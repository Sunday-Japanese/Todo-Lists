import { listInput } from "./index.js";
import { buttonAdd,closeButton,submitButton } from "./todoListUI.js";

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

localStorage.setItem('fixedTitleValue',title.value); // Local storage method is used for permanent storage here

    const checkBox = document.createElement("input");
    const deleteButton = document.createElement("button"); // Delete list button
    const listButton = document.createElement("button");   // Main list button
    const spanForListBtn = doc

    const todoList = document.querySelector(".todoList");
    const listInput = document.querySelector(".listInput");

    
    listInput.showModal();   // Opens up the dialogue box present in HTML

    checkBox.type = "checkbox";

    listButton.classList.add("listButton");
    deleteButton.classList.add("deleteButton");
    checkBox.classList.add("input");
    

    deleteButton.innerText = "-";

    
    listButton.appendChild(checkBox);
    listButton.appendChild(deleteButton);
    
    

    // A feature which allows one to delete a certain todo list button
    deleteButton.addEventListener("click",() => {
        listButton.remove();
  })

  // A feature to close list button
  closeButton.addEventListener("click",() => {
    listInput.close();
    title.value = "";
    description.value = "";
    dueDate.value = "";
    notes.value = "";
    priority.value = "";
  })

  // A feature to submit and create list input button
  submitButton.addEventListener("click",(e) => {
    listInput.close();
    listButton.innerText = title.value;
    todoList.appendChild(listButton);
    //title.value = "";
    description.value = "";
    dueDate.value = "";
    notes.value = "";
    priority.value = "";

  })

  listInput.appendChild(submitButton);

  return {listButton};
}





export {toAddTodoList};