import "./styles.css";
import { buttonAdd, closeButton, submit } from "./todoListUI.js";
import { toAddTodoList, loadTodos } from "./listCreation.js";
import { header,backButton } from "./switchPage.js";

const contentDiv = document.querySelector(".content");
const listInput = document.querySelector(".listInput");
const head = document.createElement("h1");

head.textContent = "Todo Lists";

buttonAdd.addEventListener("click", toAddTodoList);

contentDiv.appendChild(head);
contentDiv.appendChild(buttonAdd);
listInput.append(closeButton, submit);
header.appendChild(backButton);

loadTodos();

export {head,contentDiv};