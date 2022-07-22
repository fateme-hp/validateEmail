"use strict";

// variables
// form buttons
const sendBtn = document.querySelector("#submit"),
  resetBtn = document.querySelector("#resetBtn"),
  // form input
  sender = document.querySelector("#sender"),
  receiver = document.querySelector("#receiver"),
  emailSubject = document.querySelector("#emailSubject"),
  emailContent = document.querySelector("#content"),
  // form elements
  form = document.querySelector('#form'),
  spinner = document.querySelector('#spinner'),
  loaders = document.querySelector('#loaders'),
  mailImg = document.querySelector('#mailImg');

// event listeners
// loading
document.addEventListener("DOMContentLoaded", appInitial);
// form actions
sender.addEventListener("blur", validateForm);
receiver.addEventListener("blur", validateForm);
emailSubject.addEventListener("blur", validateForm);
emailContent.addEventListener("keyup", validateForm);
resetBtn.addEventListener("click", resetForm);
// form submitting 
form.addEventListener("submit" , submitForm)

// function
// disable send button by loading dom
function appInitial() {
  sendBtn.disabled = true;

  // create a nodeList of input elements 
  const borderedInput = document.querySelectorAll("form input , form textarea");
// for each input remove validation classlist 
  borderedInput.forEach(element => {
   element.classList.remove("correct") ||  element.classList.remove("error")});
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
    field.classList.add("error");
    field.classList.remove("correct");
  } 
   // if input has value 
  // change border color and add correct class
  else { 
    field.classList.remove("error");
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
    field.classList.remove("error");
    field.classList.add("correct");
  }  // otherwise change border color to red and remove correct class
  else {
    field.classList.add("error");
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

// while  submitting form 

 function submitForm(e){

  e.preventDefault();

  // change display for mail and spinner images 
  // remove mail img
  // add spinner gif 
  mailImg.style.display ="none";
  spinner.style.display ="block";

 // create an image element for successfully sent mail
  let sentImg = document.createElement("img");
  sentImg.src = "img/sent.png"

  // reset form after 2s 
  setTimeout(function(){
   
    // display sent img instead of spinner
    spinner.style.display ="none";
    loaders.appendChild(sentImg)

    // display default style after 3s
    // bring back mail img 
    // remove sent img 
    setTimeout(() => {
      mailImg.style.display ="block";
      sentImg.remove();
    }
    ,3000)

    resetForm()

  }, 2000)

 }

 // reset form 
 function resetForm(){
  form.reset();
  appInitial();
 }