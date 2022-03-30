var pageContentEl = document.querySelector("#page-content");
var taskIdCounter = 0;
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form");
        return false;
    }

var taskType = taskSelected.querySelector("span.task-type").textContent;
console.log(taskType);

    formEl.reset();
    
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
      };
    
      // send it as an argument to createTaskEl
      createTaskEl(taskDataObj);
    
  } 

var createTaskEl = function(taskDataObj) {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.setAttribute("data-task-id", taskIdCounter);

    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info"; 
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);
    tasksToDoEl.appendChild(listItemEl);

    taskIdCounter++;
};

var createTaskActions = function(taskId) {

    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";
  
  
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);
    actionContainerEl.appendChild(editButtonEl);
  
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);
    actionContainerEl.appendChild(deleteButtonEl);
  
    var statusSelectEl = document.createElement("select");
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);
    statusSelectEl.className = "select-status";
    actionContainerEl.appendChild(statusSelectEl);
   
    var statusChoices = ["To Do", "In Progress", "Completed"];
  
    for (var i = 0; i < statusChoices.length; i++) {
      
      var statusOptionEl = document.createElement("option");
      statusOptionEl.setAttribute("value", statusChoices[i]);
      statusOptionEl.textContent = statusChoices[i];
  
     
      statusSelectEl.appendChild(statusOptionEl);
    }
  
    return actionContainerEl;
  };
    
formEl.addEventListener("submit", taskFormHandler);

var taskButtonHandler = function(event) {
    
    var targetEl = event.target;
   
    if (targetEl.matches(".edit-btn")) {
      var taskId = targetEl.getAttribute("data-task-id");
      editTask(taskId);
    } 

    else if (targetEl.matches(".delete-btn")) {
      var taskId = targetEl.getAttribute("data-task-id");
      deleteTask(taskId);
    }
    
var editTask = function(taskId) {
    console.log("editing task #" + taskId);
          
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    
    // get content from task name and type
    var taskName = taskSelected.querySelector("h3.task-name").textContent;
    console.log(taskName);
    

  };
pageContentEl.addEventListener("click", taskButtonHandler);
