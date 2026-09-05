class todo {
    constructor(title, description, dueDate, notes, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.notes = notes;
        this.priority = priority;
    }
}

function toAddTodoList() {
    document.querySelector(".listInput").showModal();
}

function addTodoToTodoList() {
    const checkBox = document.createElement("input");
    const titleSpan = document.createElement("span");
    const deleteButton = document.createElement("button");
    const listButton = document.createElement("button");

    checkBox.type = "checkbox";
    titleSpan.textContent = title.value;
    deleteButton.innerText = "-";

    listButton.classList.add("listButton");
    checkBox.classList.add("input");
    deleteButton.classList.add("deleteButton");

    listButton.append(checkBox, titleSpan, deleteButton);
    document.querySelector(".todoList").appendChild(listButton);

    deleteButton.addEventListener("click", () => listButton.remove());
}

export { todo, toAddTodoList, addTodoToTodoList };