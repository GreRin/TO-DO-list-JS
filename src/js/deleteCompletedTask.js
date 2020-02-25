import { saveCompletedTasks } from './saveCompletedTasks';

export function deleteCompletedTask() {
    const listItem = this.parentNode.parentNode;
    const ul = this.parentNode.parentNode.parentNode;
    console.log(listItem);
    ul.removeChild(listItem);

    const completedItem = document.getElementById('completedItem');
    saveCompletedTasks(completedItem);
}
