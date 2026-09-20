
 import { toOpenForm } from "./listCreation";

 const closeButton = document.createElement("button");  // Close button to close dialogue box
const submitButton = document.createElement("button"); // Submit button is used to submit tible to list

closeButton.classList.add("close");
submitButton.classList.add("submit");
let listInput = document.querySelector("listInput");

closeButton.innerText = "Exit";
submitButton.innerText = "submit";

 // A feature to close list button
  closeButton.addEventListener("click",() => {
    listInput.close();
    clearForm();
  })

// A feature to submit and create list input button
  submitButton.addEventListener("click",(e) => {
    
    e.preventDefault();


    
    clearForm();
  })

  export {closeButton,submitButton}