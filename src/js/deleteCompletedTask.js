import { saveCompletedTasks } from './saveCompletedTasks';

export function deleteCompletedTask() {
    const listItem = this.parentNode.parentNode;
    const ul = listItem.parentNode;
    ul.removeChild(listItem);

    const completedItem = document.getElementById('completedTasks');
    saveCompletedTasks(completedItem);

    const countCompleted = document.getElementById('countCompleted');
    const count = Number(countCompleted.innerHTML.slice(1, -1)) - 1;
    countCompleted.innerHTML = `(${count})`;
}
