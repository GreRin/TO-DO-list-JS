
function bindTaskEvents(listItem) {

	let completeTask = listItem.querySelector("button.btn-success");
	let completeEdit = listItem.querySelector("button.btn-info");
	let completeDelete = listItem.querySelector("button.btn-danger");

	completeTask.onclick = finishTask;
	completeEdit.onclick = editTask;
	completeDelete.onclick = deleteTask;
}