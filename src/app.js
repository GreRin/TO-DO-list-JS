/* eslint-disable no-nested-ternary */
const tasksList = document.getElementById('currentTasks');
const currentTasks = document.getElementById('currentTasks');
const doneTasks = document.getElementById('doneTasks');
const addNewTask = document.getElementById('addNewTask');

const inputTitle = document.getElementById('inputTitle');
const inputText = document.getElementById('inputText');

function createNewTask(title, priority, time, task) {
    const taskItem = document.createElement('li');
    taskItem.className = 'list-group-item d-flex w-100 mb-2';

    const wrapper = document.createElement('div');
    wrapper.className = 'w-100 mr-2';
    const titleWrapper = document.createElement('div');
    titleWrapper.className = 'd-flex w-100 justify-content-between';
    const taskTitle = document.createElement('h5');
    taskTitle.className = 'mb-1';
    taskTitle.innerText = title;
    const wrapperPriority = document.createElement('div');
    const priorityTitle = document.createElement('small');
    priorityTitle.className = 'mr-2';
    priorityTitle.innerText = priority;
    const priorityTime = document.createElement('small');
    priorityTime.innerText = time;
    const taskText = document.createElement('p');
    taskText.className = 'mb-1 w-100';
    taskText.innerText = task;

    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown m-2 dropleft';
    const dropdownMenuButtonFirst = document.createElement('button');
    dropdownMenuButtonFirst.className = 'btn btn-secondary h-100';
    dropdownMenuButtonFirst.type = 'button';
    dropdownMenuButtonFirst.id = 'dropdownMenuItem1';
    dropdownMenuButtonFirst.setAttribute('data-toggle', 'dropdown');
    dropdownMenuButtonFirst.setAttribute('aria-haspopup', 'true');
    dropdownMenuButtonFirst.setAttribute('aria-expanded', 'false');
    const dropdownMenuButtonFirstInner = document.createElement('i');
    dropdownMenuButtonFirstInner.className = 'fas fa-ellipsis-v';
    const dropdownMenuSecond = document.createElement('div');
    dropdownMenuSecond.className = 'dropdown-menu p-2 flex-column';
    dropdownMenuSecond.setAttribute('aria-labelledby', 'dropdownMenuItem1');
    const buttonComplete = document.createElement('button');
    buttonComplete.className = 'btn btn-success w-100';
    buttonComplete.setAttribute('type', 'button');
    buttonComplete.id = 'complete';
    buttonComplete.innerText = 'Complete';
    const buttonEdit = document.createElement('button');
    buttonEdit.className = 'btn btn-info w-100 my-2';
    buttonEdit.setAttribute('type', 'button');
    buttonEdit.id = 'edit';
    buttonEdit.innerText = 'Edit';
    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'btn btn-danger w-100';
    buttonDelete.setAttribute('type', 'button');
    buttonDelete.id = 'delete';
    buttonDelete.innerText = 'Delete';

    dropdownMenuButtonFirst.appendChild(dropdownMenuButtonFirstInner);
    dropdownMenuSecond.appendChild(buttonComplete);
    dropdownMenuSecond.appendChild(buttonEdit);
    dropdownMenuSecond.appendChild(buttonDelete);
    dropdownMenu.appendChild(dropdownMenuButtonFirst);
    dropdownMenu.appendChild(dropdownMenuSecond);
    wrapperPriority.appendChild(priorityTitle);
    wrapperPriority.appendChild(priorityTime);
    titleWrapper.appendChild(taskTitle);
    titleWrapper.appendChild(wrapperPriority);
    wrapper.appendChild(titleWrapper);
    wrapper.appendChild(taskText);

    taskItem.appendChild(wrapper);
    taskItem.appendChild(dropdownMenu);

    return taskItem;
}

// Мгновенное время
function currentTime() {
    const timestamp = new Date();
    const time = `${timestamp.getHours()}:${timestamp.getMinutes()}   ${timestamp.getDate()}.${timestamp.getMonth()}.${timestamp.getFullYear()}`;
    console.log(time);
    return time;
}

function addTask() {
    const timestamp = new Date();
    let time = currentTime();
    const priority = (document.getElementById('Low').checked) ? 'Low priority' : (document.getElementById('Medium').checked) ? 'Medium priority' : 'High priority';
    if (inputTitle.value && inputText.value) {
        const listItem = createNewTask(inputTitle.value, priority, time, inputText.value);
        currentTasks.appendChild(listItem);
        bindTaskEvents(listItem);
        inputTitle.value = '';
        inputText.value = '';
        time = '';
    }
}

addNewTask.onclick = addTask;

function deleteTask() {
    const listItem = this.parentNode.parentNode.parentNode;
    const ul = listItem.parentNode;
    ul.removeChild(listItem);
}

function editTask() {
    const editButton = this;
    const listItem = this.parentNode.parentNode.parentNode;
    console.log(listItem);
}

function finishTask() {
    console.log(3);
}

function unfinishTask() {
    console.log(4);
}

function bindTaskEvents(listItem) {

    const completeTask = listItem.querySelector('button.btn-success');
    const completeEdit = listItem.querySelector('button.btn-info');
    const completeDelete = listItem.querySelector('button.btn-danger');

    completeTask.onclick = finishTask;
    completeEdit.onclick = editTask;
    completeDelete.onclick = deleteTask;
}
