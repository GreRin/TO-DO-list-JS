import { deleteTask } from './deleteTask';
import { editTask } from './editTask';
import { finishTask } from './finishTask';

export function bindTaskEvents(listItem) {
    const completeTask = listItem.querySelector('button.complete');
    const completeEdit = listItem.querySelector('button.edit');
    const completeDelete = listItem.querySelector('button.delete');

    completeTask.onclick = finishTask;
    completeEdit.onclick = editTask;
    completeDelete.onclick = deleteTask;
}
