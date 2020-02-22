/* eslint-disable no-nested-ternary */
// Функция добавления нового задания
export default function addTask() {
    const timestamp = new Date();
    let time = `${timestamp.getHours()}:${timestamp.getMinutes()}   ${timestamp.getDate()}.${timestamp.getMonth()}.${timestamp.getFullYear()}`;
    const priority = (document.getElementById('Low').checked) ? 'Low priority' : (document.getElementById('Medium').checked) ? 'Medium priority' : 'High priority';
    if (inputTitle.value && inputText.value) {
        const listItem = createNewTask(inputTitle.value, priority, time, inputText.value);
        currentTasks.appendChild(listItem);
        bindTaskEvents(listItem);
        inputTitle.value = '';
        inputText.value = '';
        time = '';
    }
}
