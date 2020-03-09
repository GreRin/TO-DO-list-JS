import { createNewTask } from './createNewTask';
import { completedTaskLoader } from './completedTaskLoader';
import { bindTaskEvents } from './bindTaskEvents';
import { bindCompletedTaskEvents } from './bindCompletedTaskEvents';

export function tasksLoader() {
    const colorData = JSON.parse(localStorage.getItem('colorTheme'));
    const colorTheme = document.getElementById('bg-color');
    console.log(colorData.colorThemePicker);
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
        // const color = data;
        const listItem = createNewTask(title, priority, time, task);
        currentTasks.appendChild(listItem);
        bindTaskEvents(listItem);
    }

    const completedData = JSON.parse(localStorage.getItem('completed'));
    const countCompleted = document.getElementById('countCompleted');
    countCompleted.innerText = `(${completedData.completedTasksTitleArr.length})`;

    const completedTasks = document.getElementById('completedTasks');
    for (let i = 0; i < completedData.completedTasksTitleArr.length; i++) {
        const title = completedData.completedTasksTitleArr[i];
        const task = completedData.completedTasksArr[i];
        const priority = completedData.completedPriority[i];
        const time = completedData.completedData[i];
        const completedItem = completedTaskLoader(title, priority, time, task);
        completedTasks.appendChild(completedItem);
        bindCompletedTaskEvents(completedItem);
    }
}
