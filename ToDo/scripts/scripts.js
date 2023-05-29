let todotext = document.querySelector('.todo');

let myform = document.querySelector('#myform');

let myform2 = document.querySelector('#myform2');

var modal = document.getElementById("Modal");

var span = document.getElementsByClassName("close")[0];

let edit = document.querySelector('.edit-input');

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
            doneList.removeAttribute('src');
            doneList.removeAttribute('class');
            doneList.removeAttribute('title');
            doneList.removeAttribute('alt');
            donetaskslist.appendChild(listitem);
            numberOfTasks--;
            document.querySelector('#totaltasks').innerHTML = numberOfTasks;
            numberOfDoneTasks++;
            document.querySelector('#donetasks').innerHTML = numberOfDoneTasks;
        })
        //edit
        let editList = document.createElement('img');
        listitem.appendChild(editList);
        editList.setAttribute('class', 'editImg')
        editList.setAttribute('src', 'assets/draw.png');
        editList.setAttribute('title', 'edit');
        editList.setAttribute('alt', 'edit');
        editList.addEventListener('click', function(){
            modal.style.display = "block";
        })

        myform2.addEventListener('submit', function(){
            if (edit.value != ''){
                listitem.innerHTML = edit.value;
                modal.style.display = "none"
            }
            else{
                alert("You have to type something!")
            }
        })
       
        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
        }


    }else{
        alert('You have to type something!');
    }
});



