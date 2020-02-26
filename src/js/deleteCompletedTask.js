import { saveCompletedTasks } from './saveCompletedTasks';

export function deleteCompletedTask() {
    const listItem = this.parentNode.parentNode;
    console.log(listItem);
    const ul = listItem.parentNode;
    console.log(ul);
    ul.removeChild(listItem);

    const completedItem = document.getElementById('completedTasks');
    console.log(completedItem);
    saveCompletedTasks(completedItem);
}
