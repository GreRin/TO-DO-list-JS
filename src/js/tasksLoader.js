import { createNewTask } from './createNewTask';
import { bindTaskEvents } from './bindTaskEvents';

export function tasksLoader() {
    const colorData = JSON.parse(localStorage.getItem('colorTheme'));
    const colorTheme = document.getElementById('bg-color');
    colorTheme.style.backgroundColor = colorData.colorThemePicker;

    const data = JSON.parse(localStorage.getItem('current'));
    const countToDo = document.getElementById('countToDo');
    countToDo.innerText = `(${data.currentTasksTitleArr.length})`;

    const currentTasks = document.getElementById('currentTasks');
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
}
