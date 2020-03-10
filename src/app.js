/* eslint-disable no-nested-ternary */
import { addTask } from './js/addTask';
import { tasksLoader } from './js/tasksLoader';
import { sort } from './js/sortFunc';
import { addThemeColor } from './js/addThemeColor';

addThemeColor();

if (localStorage.getItem('current') || localStorage.getItem('completed')) {
    tasksLoader();
    sort();
}

function renderPage() {
    const addNewTask = document.getElementById('addNewTask');
    addNewTask.onclick = addTask;
}
renderPage();
