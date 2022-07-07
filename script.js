// variables
const sendBtn = document.querySelector('#submit'),
    sender = document.querySelector('#sender'),
    receiver = document.querySelector('#receiver'),
    emailSubject = document.querySelector('#emailSubject'),
    emailContent = document.querySelector('#content');


// event listeners
document.addEventListener( 'DOMContentLoaded', appInitial);
sender.addEventListener('blur', validateFunc);
receiver.addEventListener('blur', validateFunc);
emailSubject.addEventListener('blur', validateFunc);
emailContent.addEventListener('blur', validateFunc);

// function

function appInitial(){
    sendBtn.disabled = true;
}

// validate
// validate fields
function validateFunc(){
 validateField(this)
}

function validateField(field){
    if (!field.value){
        field.style.borderBottomColor ="#f36656d7";
        field.style.borderBottomWidth ="2px";
    } else{
        field.style.borderBottomColor ="#00b4b7bb";
        field.style.borderBottomWidth ="2px";
    }
}
