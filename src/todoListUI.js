import {listInput} from "./index.js";
import { toAddTodoList } from "./listCreation.js";

const label = document.createElement("label");
const input = document.createElement("input");
const buttonAdd = document.createElement("buttonAdd");
const closeButton = document.createElement("button");  // Close button to close dialogue box
const submitButton = document.createElement("button"); // Submit button is used to submit tible to list

buttonAdd.classList.add("buttonAdd");
closeButton.classList.add("close");
submitButton.classList.add("submit");

buttonAdd.innerText = "+";
closeButton.innerText = "Exit";
submitButton.innerText = "submit";



export {buttonAdd,input,label,closeButton,submitButton};