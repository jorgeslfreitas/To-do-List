// função que adiciona tarefa
function addTask() {
    // título da tarefa
    const taskTitle = document.querySelector('#task-title').value;

    if(taskTitle) {
        // clona template
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true);

        // adiciona título
        newTask.querySelector('.task-title').textContent = taskTitle;

        // remover as classes desnecessárias
        newTask.classList.remove('template', 'hide');

        // adiciona tarefa na lista
        const list = document.querySelector('#task-list');
        list.appendChild(newTask);

        // evento de remover tarefa
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function() {
            removeTask(this);
        });

        // evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function() {
            completeTask(this);
        })

        // limpar o texto do input
        document.querySelector('#task-title').value = '';
    }
}

// função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

// função de completar tarefa
function completeTask(task) {
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle('done');

}

// Adicionando tarefas no To do List

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', (e)=> {
    e.preventDefault();

    addTask()

});

