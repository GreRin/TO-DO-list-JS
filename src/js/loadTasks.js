import { loadCurrentTasks } from './loadCurrentTasks';

export function loadTasks() {
    const data = loadCurrentTasks();
    console.log(data);

    // for (let i = 0; data.currentTitleTasksTitleArr.length; i++) {
    //     const listItem = createNewElement('data.currentTitleTasksTitleArr[i]');
    // }
}
