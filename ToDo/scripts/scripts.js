let todotext = document.querySelector('.todo');

let myform = document.querySelector('#myform');

myform.addEventListener('submit', function(){
    if(todotext.value != ''){
        let listitem = document.createElement('li');
        listitem.innerHTML = todotext.value;
        let taskslist = document.querySelector('#taskslist ul');
        taskslist.appendChild(listitem);
    }else{
        alert('You have to type something!');
    }
});

