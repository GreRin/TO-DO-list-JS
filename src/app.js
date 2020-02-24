/* eslint-disable no-nested-ternary */
import { addTask } from './js/addTask';
import { saveCurrentTasks } from './js/saveCurrentTasks';
// import { saveCompletedTasks } from './js/saveCompletedTasks';

function renderPage() {
    const addNewTask = document.getElementById('addNewTask');
    addNewTask.onclick = addTask;

    // const currentTasks = saveCurrentTasks();
    // console.log(currentTasks);
    // const completedTasks = saveCompletedTasks();
    // console.log(completedTasks);

    // localStorage.setItem('todo', JSON.stringify({
    //     currentTasks,
    //     completedTasks,
    // }));
}

renderPage();
