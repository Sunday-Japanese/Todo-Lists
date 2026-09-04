import "./styles.css";
import {buttonAdd,input,label} from "./todoListUI.js";
import { toAddTodoList } from "./listCreation.js";

//Main User Interface
const contentDiv = document.querySelector(".content");
const head = document.createElement("h1");
const project = document.querySelector(".project");
head.textContent = "Project";

//Adding function to buttonAdd
buttonAdd.addEventListener("click",() => {
   return toAddTodoList()
})

contentDiv.appendChild(head);
contentDiv.appendChild(buttonAdd);