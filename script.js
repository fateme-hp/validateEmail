"use strict"


// variables
const sendBtn = document.querySelector('#submit'),
    sender = document.querySelector('#sender'),
    receiver = document.querySelector('#receiver'),
    emailSubject = document.querySelector('#emailSubject'),
    emailContent = document.querySelector('#content');
let filledField =[];

// event listeners
document.addEventListener( 'DOMContentLoaded', appInitial);
sender.addEventListener('blur', validateForm);
receiver.addEventListener('blur', validateForm);
emailSubject.addEventListener('blur', validateForm);
// emailContent.addEventListener('blur',validateForm)

// function
// disable send button by loading dom
function appInitial(){
    sendBtn.disabled = true;
}

// validate
// validate fields
function validateForm(){
 validateField(this)
    
}

// check if input has value
function validateField(field){
    if (!field.value){
        field.style.borderBottomColor ="#f36656d7";
        field.style.borderBottomWidth ="2px";
    } else{
        field.style.borderBottomColor ="#00b4b7bb";
        field.style.borderBottomWidth ="2px";
        filledField.push(field); // if input has value, add it to filled array
        console.log(filledField);
    }
  activeBtn()
}

// after filling required fields, active send button
// check the length of filled array 
function activeBtn(){
    if (filledField.length < 3){
        appInitial()
    } else{
        sendBtn.disabled = false;
    }
}