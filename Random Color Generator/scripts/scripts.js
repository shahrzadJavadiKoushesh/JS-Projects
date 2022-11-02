let rRange = document.querySelector('#r-range');
let gRange = document.querySelector('#g-range');
let bRange = document.querySelector('#b-range');
let randombtn = document.querySelector('#random-btn');
let bodyTag = document.querySelector('body');

function change_color (){
    bodyTag.style.backgroundColor = "rgb("+ rRange.value +", "+ gRange.value +", "+bRange.value+")";
}

rRange.addEventListener('input', change_color());

gRange.addEventListener('input', change_color());

bRange.addEventListener('input', change_color());

randombtn.addEventListener('click', function(){
let randomNumRed = Math.floor(Math.random() * 255);
let randomNumGreen = Math.floor(Math.random() * 255);
let randomNumBlue = Math.floor(Math.random() * 255);
bodyTag.style.backgroundColor = "rgb("+ randomNumRed +", "+ randomNumGreen +", "+randomNumBlue+")";
rRange.value = randomNumRed;
gRange.value = randomNumGreen;
bRange.value = randomNumBlue;
});