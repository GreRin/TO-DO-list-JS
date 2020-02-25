import { createNewTask } from './createNewTask';
import { bindTaskEvents } from './bindTaskEvents';

export function tasksLoader() {
    const data = JSON.parse(localStorage.getItem('current'));
    const currentTasks = document.getElementById('currentTasks');
    for (let i = 0; i < data.currentTasksTitleArr.length; i++) {
        const title = data.currentTasksTitleArr[i];
        const task = data.currentTasksArr[i];
        const priority = data.currentPriority[i];
        const time = data.currentData[i];
        const listItem = createNewTask(title, priority, time, task);
        currentTasks.appendChild(listItem);
        bindTaskEvents(listItem);
    }

    const completedData = JSON.parse(localStorage.getItem('completed'));
    const completedTasks = document.getElementById('completedTasks');
    for (let i = 0; i < completedData.completedTasksTitleArr.length; i++) {
        const title = completedData.completedTasksTitleArr[i];
        const task = completedData.completedTasksArr[i];
        const priority = completedData.completedPriority[i];
        const time = completedData.completedData[i];
        const completedItem = createNewTask(title, priority, time, task);
        completedTasks.appendChild(completedItem);
        bindTaskEvents(completedItem);
    }
}
