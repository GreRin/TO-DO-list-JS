tasksList = document.getElementById("currentTasks"),
allTasks = document.getElementById("currentTasks"),
doneTasks = document.getElementById("doneTasks"),
addNewTask = document.getElementById("addNewTask");

function createNewTask(task) {
	let taskItem = document.createElement('li');
	taskItem.className = "list-group-item d-flex w-100 mb-2"

	let wrapper = document.createElement("div");
	wrapper.className = "w-100 mr-2";
	let titleWrapper = document.createElement("div");
	titleWrapper.className = "d-flex w-100 justify-content-between";
	let taskTitle = document.createElement("h5");
	taskTitle.className = "mb-1";
	let wrapperPriority = document.createElement("div");
	let priorityTitle = document.createElement("small");
	priorityTitle.className = "mr-2";
	let priorityTime = document.createElement("small");
	let taskText = document.createElement("p");
	taskText.className = "mb-1 w-100";
	taskText.innerText = task;

	let dropdownMenu = document.createElement('div');
	dropdownMenu.className = "dropdown m-2 dropleft";
	let dropdownMenuButtonFirst = document.createElement('button');
	dropdownMenuButtonFirst.className = "btn btn-secondary h-100";
	dropdownMenuButtonFirst.type = "button";
	dropdownMenuButtonFirst.id = "dropdownMenuItem1";
	dropdownMenuButtonFirst.setAttribute("data-toggle", "dropdown");
	dropdownMenuButtonFirst.setAttribute("aria-haspopup", "true");
	dropdownMenuButtonFirst.setAttribute("aria-expanded", "false");
	let dropdownMenuButtonFirstInner = document.createElement('i');
	dropdownMenuButtonFirstInner.className = "fas fa-ellipsis-v";
	let dropdownMenuSecond = document.createElement('div');
	dropdownMenuSecond.className = "dropdown-menu p-2 flex-column";
	dropdownMenuSecond.setAttribute("aria-labelledby", "dropdownMenuItem1");
	let buttonComplete = document.createElement('button');
	buttonComplete.className = "btn btn-success w-100";
	buttonComplete.setAttribute("type", "button");
	buttonComplete.innerText = "Complete";
	let buttonEdit = document.createElement('button');
	buttonEdit.className = "btn btn-success w-100";
	buttonEdit.setAttribute("type", "button");
	buttonEdit.innerText = "Edit";
	let buttonDelete = document.createElement('button');
	buttonDelete.className = "btn btn-success w-100";
	buttonDelete.setAttribute("type", "button");
	buttonDelete.innerText = "Delete";	

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

	taskItem.appendChild(wrapper);
	taskItem.appendChild(dropdownMenu);

	return taskItem;
}

console.log(createNewTask());