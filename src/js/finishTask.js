export function finishTask() {
    const listItem = this.parentNode.parentNode.parentNode;
    const ul = listItem.parentNode;
    ul.removeChild(listItem);

    const btnSection = this.parentNode;
    const dropdown = this.parentNode.parentNode;
    console.log(btnSection);
    console.log(dropdown);
    dropdown.removeChild(btnSection);

    const completedItem = document.getElementById('completedTasks');
    completedItem.appendChild(listItem);
}
