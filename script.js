showTasks();

let addTask = document.getElementById('addTask');
addTask.addEventListener('click', function(){
	let task = document.getElementById('taskText');
	let tasks_todo = localStorage.getItem('tasks_todo');
	if(tasks_todo == null)
	{
		tasksList = [];
	}
	else
	{
		tasksList = JSON.parse(tasks_todo);
	}
	if(task.value != "")
	{
		tasksList.push(task.value);
	}
	localStorage.setItem('tasks_todo',JSON.stringify(tasksList));
	task.value = "";
	showTasks();
})

function showTasks(){
	let tasks_todo = localStorage.getItem('tasks_todo');
	let tasks_doing = localStorage.getItem('tasks_doing');
	if(tasks_todo == null)
	{
		tasksList_todo = [];
	}
	else
	{
		tasksList_todo = JSON.parse(tasks_todo);
	}

	if(tasks_doing == null)
	{
		tasksList_doing = [];
	}
	else
	{
		tasksList_doing = JSON.parse(tasks_doing);
	}

	let html_todo = "";
	let html_doing = "";

	for(let i=0;i<tasksList_todo.length;i++)
	{
		html_todo += `
			<div class="list-group-item">
			    <p class="mb-1 task-label">${tasksList_todo[i]}</p>
			    <button id="${i}" onclick="startTask(this.id)" class="btn doing-task my-2" id="doneBtn">Doing</button>
			  </div>
			`;
	}
	let list = document.getElementById('taskList');
	if(tasksList_todo.length != 0)
		list.innerHTML = html_todo;
	else
		list.innerHTML = "No items in the TO-DO list to display.";

	for(i=0;i<tasksList_doing.length;i++)
	{
		html_doing += `
			<div class="list-group-item">
				<p class="mb-1 task-label">${tasksList_doing[i]}</p>
				<button id="${i}" onclick="deleteTask(this.id)" class="btn done-task my-2" id="doneBtn">Done</button>
				</div>
			`;
	}
	list = document.getElementById('doingList');
	if(tasksList_doing.length != 0)
		list.innerHTML = html_doing;
	else
		list.innerHTML = "No items in the Doing list to display.";

	console.log(tasksList_todo);
	console.log(tasksList_doing);
}

function startTask(index){
	let tasks_todo = localStorage.getItem('tasks_todo');
	let tasks_doing = localStorage.getItem('tasks_doing');
	if(tasks_todo == null)
	{
		tasksList_todo = [];
	}
	else
	{ 
		tasksList_todo = JSON.parse(tasks_todo);
	}

	if(tasks_doing == null)
	{
		tasksList_doing = [];
	}
	else
	{
		tasksList_doing = JSON.parse(tasks_doing);
	}

	let task = tasksList_todo[index];
	if(task != "")
	{
		tasksList_doing.push(task);
	}

	tasksList_todo.splice(index,1);
	localStorage.setItem('tasks_todo',JSON.stringify(tasksList_todo));
	localStorage.setItem('tasks_doing',JSON.stringify(tasksList_doing));
	showTasks();
}

function deleteTask(index){
	let tasks = localStorage.getItem('tasks_doing');
	if(tasks == null)
	{
		tasksList = [];
	}
	else
	{ 
		tasksList = JSON.parse(tasks);
	}

	tasksList.splice(index,1);
	localStorage.setItem('tasks_doing',JSON.stringify(tasksList));
	showTasks();
}