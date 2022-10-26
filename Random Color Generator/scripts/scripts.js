let rRange = document.querySelector('#r-range');
let gRange = document.querySelector('#g-range');
let bRange = document.querySelector('#b-range');
rRange.addEventListener('input', function() {
    console.log(rRange.value);
});

gRange.addEventListener('input', () => {
    console.log(gRange.value);
    
});

bRange.addEventListener('input', () => {
    console.log(bRange.value);
});

let randombtn = document.querySelector('#random-btn');

let rangesValues = 'RGB is: ' + rRange.value + ", " + gRange.value + ", " + bRange.value;

randombtn.addEventListener('click', () =>{
    alert(rangesValues);
});