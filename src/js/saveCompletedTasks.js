export function saveCompletedTasks(completedTasks) {
    const completedTasksTitleArr = [];
    const completedTasksArr = [];
    const completedPriority = [];
    const completedData = [];
    const completedColor = [];

    if (completedTasks !== null) {
        for (let i = 0; i < completedTasks.children.length; i++) {
            completedTasksArr.push(completedTasks.children[i].getElementsByTagName('p')[0].innerText);
            completedTasksTitleArr.push(completedTasks.children[i].getElementsByTagName('h5')[0].innerText);
            completedPriority.push(completedTasks.children[i].children[0].children[0].children[1].children[0].innerText);
            completedData.push(completedTasks.children[i].children[0].children[0].children[1].children[1].innerText);
            completedColor.push(completedTasks.children[i].style.backgroundColor);
        }

        localStorage.setItem('completed', JSON.stringify({
            completedTasksTitleArr,
            completedTasksArr,
            completedPriority,
            completedData,
            completedColor,
        }));
    }
}
