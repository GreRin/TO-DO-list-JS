export function loadCurrentTasks() {
    return JSON.parse(localStorage.getItem('current'));
}
