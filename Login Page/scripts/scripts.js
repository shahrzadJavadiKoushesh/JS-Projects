let eyeimg = document.querySelector('.pass-visibility');

let passInput = document.querySelector('#password'); 

eyeimg.addEventListener('click', function(){
    let passInputType = passInput.getAttribute('type');
    if (passInputType == 'password'){
        passInput.setAttribute('type', 'text');
        eyeimg.setAttribute('src', 'assets/invisible-eye.png');
    }
    else{
        passInput.setAttribute('type', 'password');
        eyeimg.setAttribute('src', 'assets/visible-eye.png');
    }
});