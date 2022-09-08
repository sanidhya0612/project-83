var mouseEvent="empty";
var last_position_of_x, last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;

    mouseEvent="mousedown";
}

canvas.addEventListener("mouseUp",my_mouseUp);
    function my_mouseUp(e){
        mouseEvent="mouseUp";

    }

    canvas.addEventListener("mouseleave",my_mouseleave);
    function my_mouseleave(e){
        mouseEvent="mouseleave";

    }

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_touch_x=e.clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
    
        console.log("last position of x and y coordinates is");
        console.log("x="+last_position_of_x+",Y="+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
    
    
    console.log("current position of x and y coordinates is");
    console.log("X="+current_position_of_touch_x+",Y="+current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();
    }
    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}

    function cleararea(){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        
    }