export function saveCurrentTasks(currentTasks) {
    const currentTasksArr = [];

    for (let i = 0; i < currentTasks.children.length; i++) {
        currentTasksArr.push(currentTasks.children[i].getElementsByTagName('p')[0].innerText);
    }

    localStorage.setItem('current', JSON.stringify({
        currentTasksArr,
    }));
}
