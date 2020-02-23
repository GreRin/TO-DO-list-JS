export function finishTask() {
    const listItem = this.parentNode.parentNode.parentNode;
    const ul = listItem.parentNode;
    ul.removeChild(listItem);

    const btnSection = this.parentNode;
    const dropdown = this.parentNode.parentNode;
    const btnUnfinish = this;
    btnUnfinish.classList.toggle('uncomplete');
    btnUnfinish.innerText = 'uncomplete';
    console.log(btnUnfinish);

    dropdown.innerHTML = '';
    dropdown.appendChild(btnUnfinish);

    const completedItem = document.getElementById('completedTasks');
    completedItem.appendChild(listItem);
}
