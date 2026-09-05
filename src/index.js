import "./styles.css";
import {buttonAdd,input,label,closeButton} from "./todoListUI.js";
import { toAddTodoList } from "./listCreation.js";

//Main User Interface
const listInput = document.querySelector(".listInput");
const contentDiv = document.querySelector(".content");
const head = document.createElement("h1");
head.textContent = "Project";

//Adding function to buttonAdd
buttonAdd.addEventListener("click",() => {
   return toAddTodoList()
})

contentDiv.appendChild(head);
contentDiv.appendChild(buttonAdd);
listInput.appendChild(closeButton);

export {listInput};