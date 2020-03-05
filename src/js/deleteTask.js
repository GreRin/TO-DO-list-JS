import { saveCompletedTasks } from './saveCompletedTasks';
import { saveCurrentTasks } from './saveCurrentTasks';

export function deleteTask() {
    const listItem = this.parentNode.parentNode.parentNode;
    const ul = listItem.parentNode;
    console.log(listItem);
    ul.removeChild(listItem);

    const completedItem = document.getElementById('completedItem');
    saveCompletedTasks(completedItem);
    const currentTasks = document.getElementById('currentTasks');
    saveCurrentTasks(currentTasks);

    const countToDo = document.getElementById('countToDo');
    const count = Number(countToDo.innerHTML.slice(1, -1)) - 1;
    countToDo.innerHTML = `(${count})`;
}
