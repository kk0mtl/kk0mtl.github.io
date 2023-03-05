const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const todoTitle = document.querySelector(".todoTitle");
const todoBar = document.querySelector("#todoBar");

let toDos = [];         //Array for saving todo obj
const TODOS_KEY = "todos";

//div태그는 visibility로 숨김
function todoBarAppear(){
    todoBar.classList.toggle("div-hidden");
}

//Save toDos on localStorage in String
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//When btn clicked, Delete listd
function deleteToDo(event){
    console.log(5);
    const li = event.target.parentElement;      //Finding clicked btn
    li.remove("li");
    toDos = toDos.filter((toDo => toDo.id !== parseInt(li.id)));
    saveToDos();        //Save modified toDos
}

//Painting todos & Btn click event
function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.className="btn";
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//When the input is submitted
function handleToDoSubmit(event){
    if(event.key === "Enter"){
        event.preventDefault();         //Preventing Reloads
        const newTodo = toDoInput.value;
        const newTodoObj = { 
            text: newTodo,
            id: Date.now(),     //Create random id
        };
        toDos.push(newTodoObj);
        toDoInput.value = "";
        paintTodo(newTodoObj);
        saveToDos();
    }
}

//submit event execute deleteToDo func too, so replace event with enter keypress
//toDoForm.addEventListener("submit", handleToDoSubmit);
toDoForm.addEventListener("keypress", handleToDoSubmit);
todoTitle.addEventListener("click", todoBarAppear);

//When reload page, Import saved todos
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);         //Convert String to array
    toDos = parsedToDos;
    parsedToDos.forEach((item)=>paintTodo(item));
}