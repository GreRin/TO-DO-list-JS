export function deleteTask() {
    const listItem = this.parentNode.parentNode.parentNode;
    const ul = listItem.parentNode;
    ul.removeChild(listItem);
}
