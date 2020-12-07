// define variables
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('#clear-tasks');
const filterInput = document.querySelector('#filter');



// define event listeners
// page reload event - get data from Local Storage
document.addEventListener('DOMContentLoaded', getTasks);
// add task to list - submit button
form.addEventListener('submit', addTask);
// remove task from list - fas fa-backspace icon
taskList.addEventListener('click', deleteTask);
// clear tasks list
clearBtn.addEventListener('click', clearTasks);
// filter task from list
filterInput.addEventListener('keyup', filterTasks);


// addTask function
function addTask(e) {
    //task from element
    const taskName = document.querySelector('#task-form').value;

    // create new ui object
    const ui = new UI();

    // create new Local Storage object
    const ls = new LS();
    // control form data
    if (taskNameName === "" ) {
        ui.alertMessage("Add a task!", "problem");
    } else {
        // create new task object with form data
        const task = new Task(taskName);
        // add person object data to html table
        ui.addTaskToTable(task);
        // save person data to Local Storage
        ls.saveTask(task);
        ui.alertMessage("Added task to your list!", "ok");
        // clear form inputs
        ui.clearInputs();
    }
    e.preventDefault();
}

// deleteTask
function deleteTask(e) {
    // create new ui object
    const ui = new UI();
    // create new Local Storage object
    const ls = new LS();
    // delete contact
    const deleteBtn = e.target;
    const taskname = deleteBtn.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

    // delete from UI
    ui.deleteTaskFromTable(e.target);
    // delete from LS
    const isDeleted = ls.deleteTask(taskname);
    // set alert
    if(isDeleted){
        ui.alertMessage("The task is now deleted", "ok");
    } else {
        ui.alertMessage("Problem with deleting task", "problem");
    }
    e.preventDefault();
}



// getTasks
function getTasks() {
    // create new Local Storage object
    const ls = new LS();
    // create new ui object
    const ui = new UI();
    // get constacts from LS
    const tasks = ls.getTasks();
    // get each contact from LS and transform to Person object
    tasks.forEach(function (tasks) {
        const newTask = new Task(
            tasks['taskName'];
        // create UI object for html table row
        ui.addTaskToTable(taskData);
    });
}

// clearContacts
function clearContacts(e) {
    // create new ui object
    const ui = new UI();
    // clear contacts from UI
    ui.clearContacts();
    // create new Local Storage object
    const ls = new LS();
    // clear contacts from LS
    const isCleared = ls.clearTasks();
    if (isCleared) {
        // add alert about it
        ui.alertMessage("Tasks are cleared", "ok");
    } else {
        ui.alertMessage("Sorry, there is a problem", "problem");
    }

}

// filterContacts
function filterContacts(e) {
    const text = e.target.value.toLowerCase();
    for (i = 0; i < getTasks().rows.length; i++) {
        const taskData = getTasks().rows[i].outerText.toLowerCase();
        if (taskData.indexOf(text) != -1) {
            getTasks().rows[i].style.display = '';
        } else {
            getTasks().rows[i].style.display = 'none';
        }
    }
}




