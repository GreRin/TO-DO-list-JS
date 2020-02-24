/* eslint-disable no-nested-ternary */
import { addTask } from './js/addTask';

function renderPage() {
    const addNewTask = document.getElementById('addNewTask');
    addNewTask.onclick = addTask;
}

renderPage();
