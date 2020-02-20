let tasksList = document.getElementById("currentTasks");
let currentTasks = document.getElementById("currentTasks");
let doneTasks = document.getElementById("doneTasks");
let addNewTask = document.getElementById("addNewTask");

let inputTitle = document.getElementById("inputTitle");
let inputText = document.getElementById("inputText");

function createNewTask(title, priority, time, task) {
	let taskItem = document.createElement('li');
	taskItem.className = "list-group-item d-flex w-100 mb-2"

	let wrapper = document.createElement("div");
	wrapper.className = "w-100 mr-2";
	let titleWrapper = document.createElement("div");
	titleWrapper.className = "d-flex w-100 justify-content-between";
	let taskTitle = document.createElement("h5");
	taskTitle.className = "mb-1";
	taskTitle.innerText = title;
	let wrapperPriority = document.createElement("div");
	let priorityTitle = document.createElement("small");
	priorityTitle.className = "mr-2";
	priorityTitle.innerText = priority;
	let priorityTime = document.createElement("small");
	priorityTime.innerText = time;
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
	buttonComplete.id = "complete";
	buttonComplete.innerText = "Complete";
	let buttonEdit = document.createElement('button');
	buttonEdit.className = "btn btn-info w-100 my-2";
	buttonEdit.setAttribute("type", "button");
	buttonEdit.id = "edit";
	buttonEdit.innerText = "Edit";
	let buttonDelete = document.createElement('button');
	buttonDelete.className = "btn btn-danger w-100";
	buttonDelete.setAttribute("type", "button");
	buttonDelete.id = "delete";
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
// Функция добавления нового задания
function addTask() {
	let timestamp = new Date();
	let time = timestamp.getHours() + ":" + timestamp.getMinutes() + "   " + timestamp.getDate() + "." + timestamp.getMonth() + "." + timestamp.getFullYear();
	let priority = (document.getElementById("Low").checked) ? "Low priority": (document.getElementById("Medium").checked) ? "Medium priority" : "High priority";
	if (inputTitle.value && inputText.value) {
		let listItem = createNewTask(inputTitle.value, priority, time, inputText.value)
		currentTasks.appendChild(listItem);
		bindTaskEvents(listItem);
		inputTitle.value = "";
		inputText.value = "";
		time = "";
	}
}

addNewTask.onclick = addTask;

function deleteTask() {
	let listItem = this.parentNode.parentNode.parentNode;
	let ul = listItem.parentNode;
	ul.removeChild(listItem)
}

function editTask() {
	console.log(2)
}

function finishTask() {
	console.log(3)
}

function unfinishTask() {
	console.log(4)
}

function bindTaskEvents(listItem) {

	let completeTask = listItem.querySelector("button.btn-success");
	let completeEdit = listItem.querySelector("button.btn-info");
	let completeDelete = listItem.querySelector("button.btn-danger");

	completeTask.onclick = finishTask;
	completeEdit.onclick = editTask;
	completeDelete.onclick = deleteTask;
}