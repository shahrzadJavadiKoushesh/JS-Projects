let rRange = document.querySelector('#r-range');
let gRange = document.querySelector('#g-range');
let bRange = document.querySelector('#b-range');
let randombtn = document.querySelector('#random-btn');

rRange.addEventListener('input', function() {
    // console.log(rRange.value);
    let red_value = rRange.value;
    let green_value = gRange.value;
    let blue_value = bRange.value;
});

gRange.addEventListener('input', function() {
    console.log(gRange.value);
});

bRange.addEventListener('input', function() {
    console.log(bRange.value);
});


randombtn.addEventListener('click', function(){
let rangesValues = 'RGB is: ' + rRange.value + ", " + gRange.value + ", " + bRange.value;
    alert(rangesValues);
});