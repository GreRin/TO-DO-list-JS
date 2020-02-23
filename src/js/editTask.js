export function editTask() {
    // const editButton = this;
    const listItem = this.parentNode.parentNode.parentNode;
    console.log(listItem);
    const contextParent = listItem.firstElementChild;
    console.log(contextParent);
    const context = listItem.querySelector('p');

    contextParent.removeChild(context);

    const changeContext = document.createElement('input');
    changeContext.type = 'text';
    changeContext.className = 'form-control';
    changeContext.id = 'inputText';

    contextParent.appendChild(changeContext);

    console.log(contextParent);
}
