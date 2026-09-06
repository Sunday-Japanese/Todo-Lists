import { head , contentDiv } from "./index.js";
import { buttonAdd } from "./todoListUI.js";

const header = document.querySelector(".header");

const backButton = document.createElement("button");
backButton.classList.add("backButton");
backButton.innerText = "<==";

backButton.addEventListener("click",() => {
    
    const contentDiv = document.querySelector(".content");
    const contentMain = document.querySelector(".todoList");

    contentDiv.textContent = "";
    contentMain.textContent = "";

    head.textContent = "Projects";
    
    contentDiv.appendChild(head);
    contentDiv.appendChild(buttonAdd);

    backButton.remove();
})

export {header,backButton};


