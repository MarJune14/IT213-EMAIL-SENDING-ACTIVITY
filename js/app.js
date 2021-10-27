//variables
const sendBtn = document.getElementById('sendBtn');


//EventListeners

eventListeners();

function eventListeners() {
    //app init
    document.addEventListener('DOMContentLoaded', appInit);

}

//functions

//App Initialization
function appInit() {
    //disabled send button on load
    sendBtn.disabled = true; 

}