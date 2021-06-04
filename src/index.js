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



    // OR //
    const taskItem = document.createElement("li");
    taskItem.innerText = newTask

    createButton(taskItem);

    taskList.appendChild(taskItem)
    form.reset()

  })

  const createButton = task => {
    const btn = document.createElement('button');
     btn.innerText = "X";
 
     task.appendChild(btn);
     btn.addEventListener('click', (e) => e.target.parentNode.remove(), false);
 }

 // need to be able to delete still 

//  const deleteTask = (e) => {
//   const selectedTask = e.target.parentElement;
//   theList.removeChild(selectedTask);
// }


  // taskList.addEventListener('click', function(event){

  // })




  //parentNode.appendChild(childNode);
  // theList.appendChild(newTask);






  //   let inputTag = document.getElementById("new-task-description");

  //   let inputValue = inputTag.value;

  //   let newLi = document.createElement('li');
  //   newLi.innerText = inputValue;


  //   let ulTag = document.querySelector('ul#tasks');
  //   ulTag.append(newLi);
  //   inputTag.value = '';
  // }

});


// id="create-task-form"
// id="new-task-description"

// id="list"