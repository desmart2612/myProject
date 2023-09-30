let body = document.getElementsByClassName('theme')[0]; // Get the first element with the 'theme' class
const chatter = document.getElementsByClassName('divider')[0];
const button = document.getElementById('chatting');
let chatting; // Declare 'chatting' outside the functions to make it accessible
let themer = document.getElementById('sun');

function changer() {
    body.classList.add('change'); // Use classList.add to add the 'change' class
    themer.removeAttribute('class');
    themer.classList.add('fa');
    themer.classList.add('fa-moon-o');
    themer.setAttribute('id', 'moon');
}

function changes() {
    body.classList.remove('change');
    themer.removeAttribute('class');
    themer.classList.add('fa');
    themer.classList.add('fa-sun-o');
    themer.setAttribute('id', 'sun');
}

function theme(){
    // Check some condition and call the appropriate function
    if (themer.id === 'sun') {
        changer(); // Add moon icon and change the theme
    } else {
        changes(); // Add sun icon and change the theme
}
}


// function changer() {
//     body.classList.add('change'); // Use classList.add to add the 'change' class
//     let moon = document.getElementById('sun');
//     moon.removeAttribute('class');
//     moon.removeAttribute('onclick');
//     moon.classList.add('fa');
//     moon.classList.add('fa-moon-o');
// }

// function changes() {
//      body.classList.remove('change');
// }

button.onclick = function chatbox() {
    chatting = document.createElement('textarea'); // Assign the created element to 'chatting'
    chatting.setAttribute('placeholder', 'type your conversation below');
    chatter.appendChild(chatting);
    chat_close();
}

function chat_close() {
    button.innerHTML = 'Submit';
    button.onclick = function close() {
        chatter.removeChild(chatting); // Now 'chatting' is accessible here
        button.innerHTML = 'Chat with us';
    };
    chatbox();
}