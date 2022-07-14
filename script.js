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
// emailSubject.addEventListener("blur", validateEmail);
// emailContent.addEventListener("blur", validateEmail);
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

  if (this.type === "email") {
    validateEmail(this);
  }

  activeBtn();
}

// check if input has value
function validateField(field) {
  if (!field.value) {
    field.style.borderBottomColor = "#f36656d7";
    field.style.borderBottomWidth = "2px";
    field.classList.remove("correct");
  } else {
    field.style.borderBottomColor = "#00b4b7bb";
    field.style.borderBottomWidth = "2px";
    field.classList.add("correct");
  }
}

// validate email

function validateEmail(field) {
  const emailText = field.value;

  if (emailText.includes("@")) {
    field.style.borderBottomColor = "#00b4b7bb";
    field.style.borderBottomWidth = "2px";
    field.classList.add("correct");
  } else {
    field.style.borderBottomColor = "#f36656d7";
    field.style.borderBottomWidth = "2px";
    field.classList.remove("correct");
  }
}

// after filling required fields, active send button

function activeBtn() {
  const correct = document.querySelectorAll(".correct");

  if (correct.length === 4) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
}

function resetStyle(field) {
   location.reload();
  // console.log(field);
  // field.borderBottomColor = "none";
}
