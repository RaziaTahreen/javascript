
const todoList = document.getElementById('todoList');
const newTodoInput = document.getElementById('newTodo');
const addTodoBtn = document.getElementById('addTodoBtn');


let todos = JSON.parse(localStorage.getItem('todos')) || [];


function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}


function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';

        li.innerHTML = `
      ${todo.text}
      <button class="toggleBtn">${todo.completed ? 'Undo' : 'Complete'}</button>
      <button class="deleteBtn">Delete</button>
    `;

        // Toggle complete/incomplete
        li.querySelector('.toggleBtn').addEventListener('click', () => {
            toggleTodoComplete(index);
        });

        // Delete todo
        li.querySelector('.deleteBtn').addEventListener('click', () => {
            deleteTodo(index);
        });

        todoList.appendChild(li);
    });
}


addTodoBtn.addEventListener('click', () => {
    const todoText = newTodoInput.value.trim();
    if (todoText) {
        todos.push({ text: todoText, completed: false });
        newTodoInput.value = '';
        saveTodos();
        renderTodos();
    }
});


function toggleTodoComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}


function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

renderTodos();
