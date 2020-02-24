import { saveCompletedTasks } from './saveCompletedTasks';

export function finishTask() {
    const listItem = this.parentNode.parentNode.parentNode;
    const dropdown = this.parentNode.parentNode;
    const ul = listItem.parentNode;
    listItem.removeChild(dropdown);
    ul.removeChild(listItem);
    const contextInput = listItem.firstChild.childNodes[1];
    contextInput.setAttribute('style', 'text-decoration: line-through');
    const completedItem = document.getElementById('completedTasks');
    completedItem.appendChild(listItem);
    saveCompletedTasks(completedItem);
}
