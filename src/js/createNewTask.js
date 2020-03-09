export function createNewTask(title, priority, time, task, color) {
    const taskItem = document.createElement('li');
    taskItem.className = 'list-group-item d-flex w-100 mb-2';

    taskItem.style.background = color;

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
    const dropdownMenuButtonFirst = document.createElement('button');
    dropdownMenuButtonFirst.className = 'btn btn-secondary h-100';
    dropdownMenuButtonFirst.type = 'button';
    dropdownMenuButtonFirst.id = 'dropdownMenuItem1';
    dropdownMenuButtonFirst.setAttribute('data-toggle', 'dropdown');
    dropdownMenuButtonFirst.setAttribute('aria-haspopup', 'true');
    dropdownMenuButtonFirst.setAttribute('aria-expanded', 'false');
    const dropdownMenuButtonFirstInner = document.createElement('i');
    dropdownMenuButtonFirstInner.className = 'fas fa-ellipsis-v';
    const dropdownMenuSecond = document.createElement('div');
    dropdownMenuSecond.className = 'dropdown-menu p-2 flex-column';
    dropdownMenuSecond.setAttribute('aria-labelledby', 'dropdownMenuItem1');
    const buttonComplete = document.createElement('button');
    buttonComplete.className = 'btn btn-success w-100 complete';
    buttonComplete.setAttribute('type', 'button');
    buttonComplete.id = 'complete';
    buttonComplete.innerText = 'Complete';
    const buttonEdit = document.createElement('button');
    buttonEdit.className = 'btn btn-info w-100 my-2 edit';
    buttonEdit.setAttribute('type', 'button');
    buttonEdit.id = 'edit';
    buttonEdit.innerText = 'Edit';
    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'btn btn-danger w-100 delete';
    buttonDelete.setAttribute('type', 'button');
    buttonDelete.id = 'delete';
    buttonDelete.innerText = 'Delete';

    dropdownMenuButtonFirst.appendChild(dropdownMenuButtonFirstInner);
    dropdownMenuSecond.appendChild(buttonComplete);
    dropdownMenuSecond.appendChild(buttonEdit);
    dropdownMenuSecond.appendChild(buttonDelete);
    dropdownMenu.appendChild(dropdownMenuButtonFirst);
    dropdownMenu.appendChild(dropdownMenuSecond);
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
