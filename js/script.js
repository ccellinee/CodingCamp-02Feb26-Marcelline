let TODOS = [];

function addTodo(){
    const todoInput = document.getElementById('todo');
    const todoDate = document.getElementById('deadline');

    if (todoInput.value.trim() === '' || todoDate.value === ''){
        alert("Tasks and deadlines must be filled in!");
    } else {
        const newTodo ={
            text: todoInput.value.trim(), 
            date: todoDate.value
        };
        TODOS.push(newTodo);
        console.log('Todo added:', TODOS);

        todoInput.value = '';
        todoDate.value = '';

        renderTodos();
    }

    console.log('Todo:', todoInput.value, 'Date:', todoDate.value);
}

function renderTodos(){
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML='';

     TODOS.forEach((item, _) => {
        todoList.innerHTML += `
        <li> <p class="text-xl">${item.text}<span class="text-sm text-gray-500">(${item.date})</span></p></li>
        `;
    });
}

function deleteAll(){
   const confirmDelete = confirm("Clear all tasks?");
   if(!confirmDelete) return;
   
    TODOS = [];
    renderTodos();
}

function deleteTodo(index){
    TODOS.splice(index, 1);
    renderTodos();
}

function filterTools(){
    TODOS.sort((a, b) => new Date(a.date) - new Date(b.date));
    renderTodos();
}