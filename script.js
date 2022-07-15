"use strict";

// variables
// form buttons
const sendBtn = document.querySelector("#submit"),
  resetBtn = document.querySelector("#reset"),
  // form input
  sender = document.querySelector("#sender"),
  receiver = document.querySelector("#receiver"),
  emailSubject = document.querySelector("#emailSubject"),
  emailContent = document.querySelector("#content");

// event listeners
// loading
document.addEventListener("DOMContentLoaded", appInitial);
// form actions
sender.addEventListener("blur", validateForm);
receiver.addEventListener("blur", validateForm);
emailSubject.addEventListener("blur", validateForm);
emailContent.addEventListener("blur", validateForm);
resetBtn.addEventListener("click", resetStyle);

// function
// disable send button by loading dom
function appInitial() {
  sendBtn.disabled = true;
}

// validate
// validate fields
function validateForm() {
  validateField(this);

  // check the input type 
  // if input type is email , do the email validation 
  if (this.type === "email") {
    validateEmail(this);
  }

  activeBtn();
}

// check if input has value
function validateField(field) {
  // if input has no value 
  // change border color to red and remove correct class
  if (!field.value) {
    field.style.borderBottomColor = "#f36656d7";
    field.style.borderBottomWidth = "2px";
    field.classList.remove("correct");
  } 
   // if input has value 
  // change border color and add correct class
  else { 
    field.style.borderBottomColor = "#00b4b7bb";
    field.style.borderBottomWidth = "2px";
    field.classList.add("correct");
  }
}

// validate email

function validateEmail(field) {
  // get value of email input 
  const emailText = field.value;

  // check if it contains "@" 
  // if email value includes "@"
  // change border color and add correct class
  if (emailText.includes("@")) {
    field.style.borderBottomColor = "#00b4b7bb";
    field.style.borderBottomWidth = "2px";
    field.classList.add("correct");
  }  // otherwise change border color to red and remove correct class
  else {
    field.style.borderBottomColor = "#f36656d7";
    field.style.borderBottomWidth = "2px";
    field.classList.remove("correct");
  }
}

// after filling required fields, active send button

function activeBtn() {
  // create a nodeList of correct class 
  const correct = document.querySelectorAll(".correct");

  // check the length of nodeList 
  // if length is 4 active the send button 
  if (correct.length === 4) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
}

// if reset button was clicked 
function resetStyle(field) {

  // refresh the page 
  //  location.reload();
 
//or 

// change inputs border bottom 

// create a nodeList of input elements 
  const borderedInput = document.querySelectorAll("form input , form textarea");
// for each input change border style to default design 
  borderedInput.forEach(element => {
    element.style.borderBottomColor = "#fff";
    element.style.borderBottomWidth = "1px";
  });
  
}
