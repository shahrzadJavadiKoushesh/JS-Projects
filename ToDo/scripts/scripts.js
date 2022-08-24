let todotext = document.querySelector('.todo');

let myform = document.querySelector('#myform');

let numberOfTasks = 0;
let numberOfDoneTasks = 0;
myform.addEventListener('submit', function(){
    if(todotext.value != ''){
        let listitem = document.createElement('li');
        listitem.innerHTML = todotext.value;
        let taskslist = document.querySelector('#taskslist ul');
        taskslist.appendChild(listitem);
        todotext.value = '';
        numberOfTasks++;
        document.querySelector('#totaltasks').innerHTML = numberOfTasks;
        // remove item 
        let removeList = document.createElement('img');
        listitem.appendChild(removeList);
        removeList.setAttribute('src', 'assets/icons8-remove-24.png');
        removeList.setAttribute('title', 'delete');
        removeList.setAttribute('alt', 'trash');

        removeList.addEventListener('click', function(){
            taskslist.removeChild(listitem);
            numberOfTasks--;
            document.querySelector('#totaltasks').innerHTML = numberOfTasks;
        });
        // done 
        let doneList = document.createElement('img');
        listitem.appendChild(doneList);
        doneList.setAttribute('class', 'checkimg')
        doneList.setAttribute('src', 'assets/icons8-done-48.png');
        doneList.setAttribute('title', 'done');
        doneList.setAttribute('alt', 'check');

        doneList.addEventListener('click', function(){
            taskslist.removeChild(listitem);
            let donetaskslist = document.querySelector('#donetaskslist ul');
            donetaskslist.appendChild(listitem);
            numberOfTasks--;
            document.querySelector('#totaltasks').innerHTML = numberOfTasks;
            numberOfDoneTasks++;
            document.querySelector('#donetasks').innerHTML = numberOfDoneTasks;
        })
    }else{
        alert('You have to type something!');
    }
});

