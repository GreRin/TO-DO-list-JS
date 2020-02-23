/* eslint-disable no-nested-ternary */
import { currentTime } from './timeFunc';
import { createNewTask } from './createNewTask';
import { bindTaskEvents } from './bindTaskEvents';

const currentTasks = document.getElementById('currentTasks');
const inputTitle = document.getElementById('inputTitle');
const inputText = document.getElementById('inputText');

export function addTask() {
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
