export function saveCurrentTasks(currentTasks) {
    const currentTasksTitleArr = [];
    const currentTasksArr = [];
    const currentPriority = [];
    const currentData = [];
    const currentColor = [];

    if (currentTasks !== null) {
        for (let i = 0; i < currentTasks.children.length; i++) {
            currentTasksArr.push(currentTasks.children[i].getElementsByTagName('p')[0].innerText);
            currentTasksTitleArr.push(currentTasks.children[i].getElementsByTagName('h5')[0].innerText);
            currentPriority.push(currentTasks.children[i].children[0].children[0].children[1].children[0].innerText);
            currentData.push(currentTasks.children[i].children[0].children[0].children[1].children[1].innerText);
            currentColor.push(currentTasks.children[i].style.backgroundColor);
        }

        localStorage.setItem('current', JSON.stringify({
            currentTasksTitleArr,
            currentTasksArr,
            currentPriority,
            currentData,
            currentColor,
        }));
    }
}
