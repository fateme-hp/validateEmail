"use strict";

// variables
const sendBtn = document.querySelector("#submit"),
  sender = document.querySelector("#sender"),
  receiver = document.querySelector("#receiver"),
  emailSubject = document.querySelector("#emailSubject"),
  emailContent = document.querySelector("#content");
let filledField = [];

// event listeners
document.addEventListener("DOMContentLoaded", appInitial);
sender.addEventListener("blur", validateForm);
receiver.addEventListener("blur", validateForm);
emailSubject.addEventListener("blur", validateForm);
// emailContent.addEventListener('blur',validateForm)
emailSubject.addEventListener("blur", validateEmail);
emailContent.addEventListener("blur", validateEmail);

// function
// disable send button by loading dom
function appInitial() {
  sendBtn.disabled = true;
}

// validate
// validate fields
function validateForm() {
  validateField(this);
}

// check if input has value
function validateField(field) {
  if (!field.value) {
    field.style.borderBottomColor = "#f36656d7";
    field.style.borderBottomWidth = "2px";
  } else {
    field.style.borderBottomColor = "#00b4b7bb";
    field.style.borderBottomWidth = "2px";

    // if input has value, add it to filled array

    // before pushing field to array , check array
    // if array does not include it, then add to filledfield array
    if (!filledField.includes(field)) {
      filledField.push(field);
    }
  }
  activeBtn();
}

// after filling required fields, active send button
// check the length of filled array
function activeBtn() {
  if (filledField.length < 3) {
    appInitial();
  } else {
    sendBtn.disabled = false;
  }
}

// validate email

function validateEmail() {
  if (
    sender.value.includes("@") == false ||
    receiver.value.includes("@") == false
  ) {

// alert(
//     `
//         Your email address must includes '@', a prefix and a domain.
//         like "example@mail.com"

//         NOTE:
//         The prefix appears to the left of the @ symbol.
//         The domain appears to the right of the @ symbol.
//        `
// )
    // let alertNotif = document.createElement("div");
    // alertNotif.classList.add("alert");

    // document.querySelector(".container").appendChild(alertNotif);

    // let alertText = document.createElement("pre");
    // alertNotif.appendChild(alertText);
    // alertText.append(
    //   `
    //     Your email address must includes '@', a prefix and a domain.
    //     like "example@mail.com"

    //     NOTE:
    //     The prefix appears to the left of the @ symbol.
    //     The domain appears to the right of the @ symbol.
    //    `
    // );
  }
}
