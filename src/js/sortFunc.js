import { createNewTask } from './createNewTask';
import { bindTaskEvents } from './bindTaskEvents';

export function sort() {
    const data = JSON.parse(localStorage.getItem('current'));
    // Sort tasks decrease
    const sortTasksDecrease = document.getElementById('decrease');
    sortTasksDecrease.addEventListener('click', () => {
        const currentTasks = document.getElementById('currentTasks');

        let child = currentTasks.lastElementChild;
        for (let i = 0; i < currentTasks.length; i++) {
            const a = currentTasks.firstElementChild;
            currentTasks.appendChild(a);
            currentTasks.remove(a);
        }

        while (child) {
            currentTasks.removeChild(child);
            child = currentTasks.lastElementChild;
        }


        for (let i = data.currentTasksTitleArr.length - 1; i + 1 > 0; i--) {
            const title = data.currentTasksTitleArr[i];
            const task = data.currentTasksArr[i];
            const priority = data.currentPriority[i];
            const time = data.currentData[i];
            const color = data.currentColor[i];
            const listItem = createNewTask(title, priority, time, task, color);
            currentTasks.appendChild(listItem);
            bindTaskEvents(listItem);
        }
    });
    // Sort tasks increase
    const sortTasksIncrease = document.getElementById('increase');
    sortTasksIncrease.addEventListener('click', () => {
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
            const color = data.currentColor[i];
            const listItem = createNewTask(title, priority, time, task, color);
            currentTasks.appendChild(listItem);
            bindTaskEvents(listItem);
        }
    });
}
