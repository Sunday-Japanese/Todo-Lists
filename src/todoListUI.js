import {listInput} from "./index.js";
import { toAddTodoList } from "./listCreation.js";

const label = document.createElement("label");
const input = document.createElement("input");
const buttonAdd = document.createElement("buttonAdd");
const closeButton = document.createElement("button");  // Close button to close dialogue box

buttonAdd.classList.add("buttonAdd");
closeButton.classList.add("close");

buttonAdd.innerText = "+";
closeButton.innerText = "Exit";

 // A feature which allows to close dialog box
    closeButton.addEventListener("click",() => {
        listInput.close();
    })

export {buttonAdd,input,label,closeButton};