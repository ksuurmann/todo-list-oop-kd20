class LS {
    saveTask(task){
        // get person data from Local Storage
        let tasks;
        // if data not exists
        if(localStorage.getItem('tasks') === null){
            tasks = [];
        } else {
            // data is exists
            // get them from Local Storage
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTasks() {
        // get person data from Local Storage
        let tasks;
        // if data not exists
        if(localStorage.getItem('tasks') === null){
            tasks = [];
        } else {
            // data is exists
            // get them from Local Storage
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    }

    deleteTask(taskname) {
        // get all data from LS
        const tasks = this.getTasks();
        // controll each contact
        tasks.forEach(function (task, index) {
            if (person.firstName === firstname && person.lastName === lastname) {
                persons.splice(index, 1);
            }
        });
        // set up data on LS
        localStorage.setItem('tasks', JSON.stringify(tasks));
        // return true
        return true;
    }

    clearTasks() {
        localStorage.clear();
        return true;
    }
}