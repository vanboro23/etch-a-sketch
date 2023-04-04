/*

-create a FUCNTION getColor() that engage when user pick the color from color picker.
    IF the user pick the color.
        -Pen BUTTON Will change change color.
-create a FUNCTION erase() that will clear the color from the canvas Grid that clicked or hover. 
-create a FUNCTION reset() that will reset all the color from the canvas grid into blank canvas.
-create a FUNCTION changeSize() that will chage the canvas grid size.

*/

let color = document.querySelector('input');
let penTool = document.querySelector('#handler-pen');
let eraserTool = document.querySelector('#handler-eraser');
let clearTool = document.querySelector('#handler-clear');

let gridCanvas = document.querySelector('.grid');
let gridElement = document.querySelector('.grid-element');

penTool.addEventListener('click', function () {
    console.log(this);
    
});

eraserTool.addEventListener('click',function () {
    console.log(this);
    
});

clearTool.addEventListener('click',function () {
    console.log(this);
});


