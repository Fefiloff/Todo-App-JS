const App = document.getElementById('todolist');
const Input = document.getElementById('todoInput');
const Button = document.getElementById('addButton');
let todoList = [];

addButton.addEventListener('click', function () {
    if (Input.value === '') {
        alert('need some text')
    }
    else {
        let newTodo = {
            todo: Input.value,
            done: false
        }
        todoList.push(newTodo);
        // console.log(todoList);
        displayTasks();
        // paragraph = document.createElement('li');
        // paragraph.innerText = newTodo.todo;
        // App.appendChild(paragraph);
        //
    }

});

function displayTasks() {
    let displayTask = '';
    todoList.forEach(function (task, i) {
        displayTask += `
        <li>
            <input type='checkbox' id='${i}'>
            <label for='${i}'>${task.todo}</label>
        </li>
        `;
        App.innerHTML = displayTask;
        Input.value = '';
    })
}

// App.addEventListener('click', function getTaskDone(event) {
//     console.log(event.target);
// })


// Input.onfocus = () => {
//     console.log('it works');
//     Button.style.display = 'none';
// }