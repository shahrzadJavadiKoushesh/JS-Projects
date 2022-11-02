let rRange = document.querySelector('#r-range');
let gRange = document.querySelector('#g-range');
let bRange = document.querySelector('#b-range');
let randombtn = document.querySelector('#random-btn');
let bodyTag = document.querySelector('body');

function change_color (){
    bodyTag.style.backgroundColor = "rgb("+ rRange.value +", "+ gRange.value +", "+bRange.value+")";
}

rRange.addEventListener('input',function(){
    change_color()}
);

gRange.addEventListener('input', function(){
change_color()}
);

bRange.addEventListener('input', function(){ 
    change_color()}
);

randombtn.addEventListener('click', function(){
let randomNumRed = Math.floor(Math.random() * 255);
let randomNumGreen = Math.floor(Math.random() * 255);
let randomNumBlue = Math.floor(Math.random() * 255);
bodyTag.style.backgroundColor = "rgb("+ randomNumRed +", "+ randomNumGreen +", "+randomNumBlue+")";
rRange.value = randomNumRed;
gRange.value = randomNumGreen;
bRange.value = randomNumBlue;
const textarea = document.createElement("textarea");
textarea.value = "RGB code is: " + randomNumRed + ', ' + randomNumGreen + ', ' + randomNumBlue;
document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert(textarea.value);
});