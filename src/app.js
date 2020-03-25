/* eslint-disable no-nested-ternary */
import { addTask } from './js/addTask';
import { tasksLoader } from './js/tasksLoader';
import { completedTasksLoader } from './js/completedTasksLoader';
import { sort } from './js/sortFunc';
import { addThemeColor } from './js/addThemeColor';

addThemeColor();

if (localStorage.getItem('current') || localStorage.getItem('completed')) {
    tasksLoader();
    completedTasksLoader();
    sort();
}

function renderPage() {
    const addNewTask = document.getElementById('addNewTask');
    addNewTask.onclick = addTask;
}
renderPage();
