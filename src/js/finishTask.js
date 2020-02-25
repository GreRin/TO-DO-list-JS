import { saveCompletedTasks } from './saveCompletedTasks';
import { saveCurrentTasks } from './saveCurrentTasks';

export function finishTask() {
    const listItem = this.parentNode.parentNode.parentNode;
    const ul = listItem.parentNode;
    const dropdown = this.parentNode.parentNode;
    const dropDown = dropdown.firstChild;
    const buttons = dropdown.lastChild;
    dropdown.removeChild(dropDown);
    dropdown.removeChild(buttons);

    ul.removeChild(listItem);

    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'btn btn-danger w-100 delete';
    buttonDelete.setAttribute('type', 'button');
    buttonDelete.id = 'delete';
    buttonDelete.innerText = 'Delete';
    dropdown.appendChild(buttonDelete);

    const completedItem = document.getElementById('completedTasks');
    completedItem.appendChild(listItem);
    saveCompletedTasks(completedItem);

    const currentTasks = document.getElementById('currentTasks');
    saveCurrentTasks(currentTasks);
}
