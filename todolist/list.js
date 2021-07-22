//selectors
const todoInput= document.querySelector('.todoinput');
const todoButton = document.querySelector('.todobt');
const todoList = document.querySelector('.todolist');

//eventListener
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deletetodo);

//function
function addTodo(event) {
    event.preventDefault();   

//todo div
const todoDiv= document.createElement('div');
todoDiv.classList.add('todo');

//todo list
const newTodo = document.createElement('p');
newTodo.innerHTML= todoInput.value;
newTodo.classList.add('todoItem');
todoDiv.appendChild(newTodo);

//check button
const finish= document.createElement('button');
finish.innerHTML='o';
finish.classList.add('finishbtn');
todoDiv.appendChild(finish);

//delete button
const remove =document.createElement('button');
remove.innerHTML='x';
remove.classList.add('removebtn');
todoDiv.appendChild(remove);

//append to list
todoList.appendChild(todoDiv);

//clear input
todoInput.value="";
}
//functon delete
function deletetodo(e) {
    const item = e.target;
    //delete
    if(item.classList[0]==='removebtn'){
        const todo = item.parentElement;
        todo.remove();
    }
    
}

