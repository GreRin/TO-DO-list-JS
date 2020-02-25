/* eslint-disable no-nested-ternary */
import { addTask } from './js/addTask';
import { tasksLoader } from './js/tasksLoader';

function renderPage() {
    tasksLoader();
    const addNewTask = document.getElementById('addNewTask');
    addNewTask.onclick = addTask;
}

renderPage();
