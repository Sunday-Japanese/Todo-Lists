const STORAGE_KEY = "todos";

class todo {
    constructor(title, description, dueDate, notes, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.notes = notes;
        this.priority = priority;
    }
}

function getTodos() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function toAddTodoList() {
    document.querySelector(".listInput").showModal();
}

function createTodoRow(item) {
    const checkBox = document.createElement("input");
    const titleSpan = document.createElement("span");
    const deleteButton = document.createElement("button");
    const listButton = document.createElement("button");

    checkBox.type = "checkbox";
    titleSpan.textContent = item.title;
    deleteButton.innerText = "-";

    listButton.classList.add("listButton");
    checkBox.classList.add("input");
    deleteButton.classList.add("deleteButton");

    listButton.append(checkBox, titleSpan, deleteButton);

    deleteButton.addEventListener("click", () => {
        listButton.remove();
        const todos = getTodos().filter(t => t.title !== item.title);
        saveTodos(todos);
    });

    return listButton;
}

function addTodoToTodoList(item) {
    const todos = getTodos();
    todos.push(item);
    saveTodos(todos);

    document.querySelector(".todoList").appendChild(createTodoRow(item));
}

function loadTodos() {
    const list = document.querySelector(".todoList");
    getTodos().forEach(item => list.appendChild(createTodoRow(item)));
}

export { todo, toAddTodoList, addTodoToTodoList, loadTodos };
