export function completedTaskLoader(title, priority, time, task) {
    const taskItem = document.createElement('li');
    taskItem.className = 'list-group-item d-flex w-100 mb-2';

    const wrapper = document.createElement('div');
    wrapper.className = 'w-100 mr-2';
    const titleWrapper = document.createElement('div');
    titleWrapper.className = 'd-flex w-100 justify-content-between';
    const taskTitle = document.createElement('h5');
    taskTitle.className = 'mb-1';
    taskTitle.innerText = title;
    const wrapperPriority = document.createElement('div');
    const priorityTitle = document.createElement('small');
    priorityTitle.className = 'mr-2';
    priorityTitle.innerText = priority;
    const priorityTime = document.createElement('small');
    priorityTime.innerText = time;
    const taskText = document.createElement('p');
    taskText.className = 'mb-1 w-100';
    taskText.innerText = task;
    const taskInputText = document.createElement('input');
    taskInputText.className = 'form-control';
    taskInputText.setAttribute('placeholder', task);
    taskInputText.classList.toggle('hidden');
    taskInputText.id = 'inputText';

    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown m-2 dropleft';


    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'btn btn-danger w-100 delete';
    buttonDelete.setAttribute('type', 'button');
    buttonDelete.id = 'delete';
    buttonDelete.innerText = 'Delete';

    dropdownMenu.appendChild(buttonDelete);

    wrapperPriority.appendChild(priorityTitle);
    wrapperPriority.appendChild(priorityTime);
    titleWrapper.appendChild(taskTitle);
    titleWrapper.appendChild(wrapperPriority);
    wrapper.appendChild(titleWrapper);
    wrapper.appendChild(taskText);
    wrapper.appendChild(taskInputText);

    taskItem.appendChild(wrapper);
    taskItem.appendChild(dropdownMenu);

    return taskItem;
}
