import "./styles.css";
import {buttonAdd, input, label} from "./todoListUI.js";
import { toOpenForm } from "./listCreation.js";
import { closeButton,submitButton } from "./formButtons.js";

//Main User Interface
const listInput = document.querySelector(".listInput");
const contentDiv = document.querySelector(".content");
const head = document.createElement("h1");
head.textContent = "Project";

//Adding function to buttonAdd
buttonAdd.addEventListener("click",() => {
   return toOpenForm()
})

contentDiv.appendChild(head);
contentDiv.appendChild(buttonAdd);
listInput.appendChild(closeButton);
listInput.appendChild(submitButton);

export {listInput};