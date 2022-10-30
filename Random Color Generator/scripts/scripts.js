let rRange = document.querySelector('#r-range');
let gRange = document.querySelector('#g-range');
let bRange = document.querySelector('#b-range');
let randombtn = document.querySelector('#random-btn');
let bodyTag = document.querySelector('body');

rRange.addEventListener('input', function() {
    let red_value = rRange.value;
    let green_value = gRange.value;
    let blue_value = bRange.value;
    bodyTag.style.backgroundColor = "rgb("+ red_value +", "+ green_value +", "+blue_value+")";
});

gRange.addEventListener('input', function() {
    let red_value = rRange.value;
    let green_value = gRange.value;
    let blue_value = bRange.value;
    bodyTag.style.backgroundColor = "rgb("+ red_value +", "+ green_value +", "+blue_value+")";
});

bRange.addEventListener('input', function() {
    let red_value = rRange.value;
    let green_value = gRange.value;
    let blue_value = bRange.value;
    bodyTag.style.backgroundColor = "rgb("+ red_value +", "+ green_value +", "+blue_value+")";
});


randombtn.addEventListener('click', function(){
let rangesValues = 'RGB is: ' + rRange.value + ", " + gRange.value + ", " + bRange.value;
    alert(rangesValues);
});