const loginForm = document.querySelector("#login-form"); 
const loginInput = document.querySelector("#login-form input"); 
const greeting = document.querySelector("#greeting"); 
const logout = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function LoginSubmit(event){
    event.preventDefault(); 
    const username = loginInput.value; 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = "Hello " + username;
    paintGreetings(username);
}

function paintGreetings(username){
    logout.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function deleteUsername(){
    localStorage.removeItem(USERNAME_KEY);
    logout.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginInput.value="";
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log(savedUserName);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    paintGreetings(savedUserName);
}

loginForm.addEventListener("submit", LoginSubmit);
logout.addEventListener("click", deleteUsername);
