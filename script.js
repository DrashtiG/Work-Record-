showTasks();

let addTask = document.getElementById('addTask');
addTask.addEventListener('click', function(){
	let task = document.getElementById('taskText');
	let tasks = localStorage.getItem('tasks');
	if(tasks == null)
	{
		tasksList = [];
	}
	else
	{
		tasksList = JSON.parse(tasks);
	}
	if(task.value != "")
	{
		tasksList.push(task.value);
	}
	localStorage.setItem('tasks',JSON.stringify(tasksList))
	console.log(task,tasksList);
	task.value = "";
	showTasks();
})

function showTasks(){
	let task = document.getElementById('taskText').value;
	let tasks = localStorage.getItem('tasks');
	if(tasks == null)
	{
		tasksList = [];
	}
	else
	{
		tasksList = JSON.parse(tasks);
	}

	let html = "";

	for(let i=0;i<tasksList.length;i++)
	{
		html += `
			<div class="list-group-item">
			    <p class="mb-1 task-label">${tasksList[i]}</p>
			    <button id="${i}" onclick="deleteTask(this.id)" class="btn done-task my-2" id="doneBtn">Done</button>
			  </div>
			`;
	}
	let list = document.getElementById('taskList');
	if(tasksList.length != 0)
		list.innerHTML = html;
	else
		list.innerHTML = "No items in the TO-DO list to display.";
}

function deleteTask(index){
	let tasks = localStorage.getItem('tasks');
	if(tasks == null)
	{
		tasksList = [];
	}
	else
	{ 
		tasksList = JSON.parse(tasks);
	}

	tasksList.splice(index,1);
	localStorage.setItem('tasks',JSON.stringify(tasksList));
	showTasks();
}