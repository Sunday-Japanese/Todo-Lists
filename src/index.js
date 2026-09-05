import "./styles.css";
import { buttonAdd, closeButton, submit } from "./todoListUI.js";
import { toAddTodoList } from "./listCreation.js";

const contentDiv = document.querySelector(".content");
const listInput = document.querySelector(".listInput");
const head = document.createElement("h1");

head.textContent = "Project";

buttonAdd.addEventListener("click", toAddTodoList);

contentDiv.appendChild(head);
contentDiv.appendChild(buttonAdd);
listInput.append(closeButton, submit);