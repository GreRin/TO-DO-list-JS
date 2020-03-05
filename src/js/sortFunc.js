import { createNewTask } from './createNewTask';
import { bindTaskEvents } from './bindTaskEvents';

export function sort() {
    const data = JSON.parse(localStorage.getItem('current'));
    // Sort tasks decrease
    const sortTasksDecrease = document.getElementById('decrease');
    sortTasksDecrease.addEventListener('click', (event) => {
        const currentTasks = document.getElementById('currentTasks');
        let child = currentTasks.lastElementChild;

        while (child) {
            currentTasks.removeChild(child);
            child = currentTasks.lastElementChild;
        }

        for (let i = data.currentTasksTitleArr.length - 1; i + 1 > 0; i--) {
            const title = data.currentTasksTitleArr[i];
            const task = data.currentTasksArr[i];
            const priority = data.currentPriority[i];
            const time = data.currentData[i];
            const listItem = createNewTask(title, priority, time, task);
            currentTasks.appendChild(listItem);
            bindTaskEvents(listItem);
        }

        sortTasksDecrease.removeEventListener('click', (event), true);
    }, true);
    // Sort tasks increase
    const sortTasksIncrease = document.getElementById('increase');
    sortTasksIncrease.addEventListener('click', (event) => {
        const currentTasks = document.getElementById('currentTasks');
        let child = currentTasks.lastElementChild;

        while (child) {
            currentTasks.removeChild(child);
            child = currentTasks.lastElementChild;
        }

        for (let i = 0; i < data.currentTasksTitleArr.length; i++) {
            const title = data.currentTasksTitleArr[i];
            const task = data.currentTasksArr[i];
            const priority = data.currentPriority[i];
            const time = data.currentData[i];
            const listItem = createNewTask(title, priority, time, task);
            currentTasks.appendChild(listItem);
            bindTaskEvents(listItem);
        }

        sortTasksIncrease.removeEventListener('click', (event), true);
    }, true);
}
