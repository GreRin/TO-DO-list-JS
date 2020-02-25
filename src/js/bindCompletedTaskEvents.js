import { deleteCompletedTask } from './deleteCompletedTask';

export function bindCompletedTaskEvents(completedItem) {
    const completeDelete = completedItem.querySelector('button.delete');
    completeDelete.onclick = deleteCompletedTask;
}
