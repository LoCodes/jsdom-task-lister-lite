document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");



    // add event listener!
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    // have the user input 
    const newTask = document.getElementById("new-task-description").value
    // newTask.value

    // input in DOM


    const taskItem = document.createElement("li");
    taskItem.innerText = newTask

    createButton(taskItem);

    taskList.appendChild(taskItem)
    form.reset()

  })


  // delete BUTTON and action

  const createButton = task => {
    const btn = document.createElement('button');
     btn.innerText = "X";
 
     task.appendChild(btn);
     btn.addEventListener('click', (e) => e.target.parentNode.remove(), false);  // delete action 
 }



});


