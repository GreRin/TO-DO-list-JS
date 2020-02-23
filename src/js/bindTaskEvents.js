import { deleteTask } from './deleteTask';
import { editTask } from './editTask';
import { finishTask } from './finishTask';

export function bindTaskEvents(listItem) {
    const completeTask = listItem.querySelector('button.btn-success');
    const completeEdit = listItem.querySelector('button.btn-info');
    const completeDelete = listItem.querySelector('button.btn-danger');
    // const uncompleteTask = listItem.querySelector('button.uncomplete');

    completeTask.onclick = finishTask;
    completeEdit.onclick = editTask;
    completeDelete.onclick = deleteTask;
    // uncompleteTask.onclick = finishTask;
}