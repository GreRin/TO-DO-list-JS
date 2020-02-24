export function saveCompletedTasks(completedItem) {
    const completedTasksArr = [];

    for (let i = 0; i < completedItem.children.length; i++) {
        completedTasksArr.push(completedItem.children[i].getElementsByTagName('p')[0].innerText);
    }

    localStorage.setItem('completed', JSON.stringify({
        completedTasksArr,
    }));
}
