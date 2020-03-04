import { createNewTask } from './createNewTask';
// import { completedTaskLoader } from './completedTaskLoader';
import { bindTaskEvents } from './bindTaskEvents';
// import { bindCompletedTaskEvents } from './bindCompletedTaskEvents';

export function sort() {
    const data = JSON.parse(localStorage.getItem('current'));
    const sortTasks = document.getElementById('decrease');
    // console.log(myNode);

    sortTasks.addEventListener('click', (event) => {
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

        sortTasks.removeEventListener('click', (event), true);
    }, true);
}
