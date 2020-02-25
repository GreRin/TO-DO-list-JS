/* eslint-disable no-nested-ternary */
import { addTask } from './js/addTask';
import { loadTasks } from './js/loadTasks';

function renderPage() {
    const addNewTask = document.getElementById('addNewTask');
    addNewTask.onclick = addTask;
}

renderPage();
loadTasks();
