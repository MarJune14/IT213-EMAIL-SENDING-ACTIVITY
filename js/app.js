//variables
const sendBtn = document.getElementById('sendBtn'),
       email = document.getElementById('email'),
       subject = document.getElementById('subject'),
       message = document.getElementById('message');


//EventListeners

eventListeners();

function eventListeners() {
    //app init
    document.addEventListener('DOMContentLoaded', appInit);

    //Validate the Forms
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
}

//functions

//App Initialization
function appInit() {
    //disabled send button on load
    sendBtn.disabled = true; 

}

//validate fields

function validateField() {
    let errors;


    //validate the lenght of fields
    validateLength(this)

    //validate the email
    if(this.type === 'email') {
        validateEmail(this);
    }
}

//validate the length of the field

function validateLength(field) {
    if(field.value.length > 0 ) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');

    }
}

//validate email

function validateEmail(field) {
    let emailText = field.value;

    //chech if the emailText contains the @ sign
    if(emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');

    }
     
}