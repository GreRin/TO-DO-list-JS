/* eslint-disable no-nested-ternary */
import { currentTime } from './js/timeFunc';
import { createNewTask } from './js/createNewTask';
import { bindTaskEvents } from './js/bindTaskEvents';

const tasksList = document.getElementById('currentTasks');
const currentTasks = document.getElementById('currentTasks');
const doneTasks = document.getElementById('doneTasks');
const addNewTask = document.getElementById('addNewTask');

const inputTitle = document.getElementById('inputTitle');
const inputText = document.getElementById('inputText');

function addTask() {
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
