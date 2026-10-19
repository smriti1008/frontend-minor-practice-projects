const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function(){
    const task = taskInput.value.trim();
    if(task===""){
        alert("please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerText = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete"

    deleteBtn.addEventListener("click", function(){
        li.remove();
    })

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value ="";
})