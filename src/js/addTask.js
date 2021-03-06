/* eslint-disable no-nested-ternary */
import { currentTime } from './timeFunc';
import { createNewTask } from './createNewTask';
import { bindTaskEvents } from './bindTaskEvents';
import { saveCurrentTasks } from './saveCurrentTasks';

const currentTasks = document.getElementById('currentTasks');
const inputTitle = document.getElementById('inputTitle');
const inputText = document.getElementById('inputText');

export function addTask() {
    let time = currentTime();
    let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const priority = (document.getElementById('Low').checked) ? 'Low priority' : (document.getElementById('Medium').checked) ? 'Medium priority' : 'High priority';
    if (inputTitle.value && inputText.value) {
        const listItem = createNewTask(inputTitle.value, priority, time, inputText.value, color);
        currentTasks.appendChild(listItem);
        bindTaskEvents(listItem);
        inputTitle.value = '';
        inputText.value = '';
        time = '';
        color = '';
        saveCurrentTasks(currentTasks);
    }

    const countToDo = document.getElementById('countToDo');
    const count = Number(countToDo.innerHTML.slice(1, -1)) + 1;
    countToDo.innerHTML = `(${count})`;

}
