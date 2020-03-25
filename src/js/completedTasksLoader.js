import { bindCompletedTaskEvents } from './bindCompletedTaskEvents';
import { completedTaskLoader } from './completedTaskLoader';

export function completedTasksLoader() {
    const completedData = JSON.parse(localStorage.getItem('completed'));
    const countCompleted = document.getElementById('countCompleted');
    countCompleted.innerText = `(${completedData.completedTasksTitleArr.length})`;

    const completedTasks = document.getElementById('completedTasks');
    for (let i = 0; i < completedData.completedTasksTitleArr.length; i++) {
        const title = completedData.completedTasksTitleArr[i];
        const task = completedData.completedTasksArr[i];
        const priority = completedData.completedPriority[i];
        const time = completedData.completedData[i];
        const color = completedData.completedColor[i];
        const completedItem = completedTaskLoader(title, priority, time, task, color);
        completedTasks.appendChild(completedItem);
        bindCompletedTaskEvents(completedItem);
    }
}
