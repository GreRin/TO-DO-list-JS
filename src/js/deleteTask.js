import { saveCompletedTasks } from './saveCompletedTasks';

export function deleteTask() {
    const listItem = this.parentNode.parentNode.parentNode;
    const ul = listItem.parentNode;
    ul.removeChild(listItem);

    const completedItem = document.getElementById('completedItem');
    saveCompletedTasks(completedItem);
}
