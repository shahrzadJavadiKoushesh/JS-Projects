let myform = document.querySelector('#myform');

let todotext = document.querySelector('.todo');

myform.addEventListener('submit', function(){
    let listitem = document.createElement('li');
    listitem.innerHTML = todotext.value;
    let taskslist = document.querySelector('#taskslist ul');
    taskslist.appendChild(listitem);
});

