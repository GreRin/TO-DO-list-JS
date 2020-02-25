import { createNewTask } from './createNewTask';
import { bindTaskEvents } from './bindTaskEvents';

export function tasksLoader() {
    const data = JSON.parse(localStorage.getItem('current'));
    const currentTasks = document.getElementById('currentTasks');
    console.log(data);
    for (let i = 0; i < data.currentTasksTitleArr.length; i++) {
        const title = data.currentTasksTitleArr[i];
        const task = data.currentTasksArr[i];
        const priority = data.currentPriority[i];
        const time = data.currentData[i];
        const listItem = createNewTask(title, priority, time, task);
        currentTasks.appendChild(listItem);
        bindTaskEvents(listItem);
    }
}
