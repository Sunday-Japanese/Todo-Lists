import { todo, addTodoToTodoList } from "./listCreation.js";

const buttonAdd = document.createElement("buttonAdd");
const closeButton = document.createElement("button");
const submit = document.createElement("button");

const listInput = document.querySelector(".listInput");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const notes = document.querySelector("#notes");
const priority = document.querySelector("#priority");

buttonAdd.classList.add("buttonAdd");
closeButton.classList.add("close");
submit.classList.add("submit");

buttonAdd.innerText = "+";
closeButton.innerText = "Exit";
submit.innerText = "Submit";

function clearForm() {
    title.value = "";
    description.value = "";
    dueDate.value = "";
    notes.value = "";
    priority.value = "";
}

closeButton.addEventListener("click", () => {
    listInput.close();
    clearForm();
});

submit.addEventListener("click", (event) => {
    event.preventDefault();
    addTodoToTodoList(new todo(
        title.value,
        description.value,
        dueDate.value,
        notes.value,
        priority.value,
    ));
    clearForm();
    listInput.close();
});

export { buttonAdd, closeButton, submit };