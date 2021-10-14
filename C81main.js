canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    color=document.getElementById("color").value
    console.log(color)
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    console.log(mousex,mousey);
    circle(mousex,mousey)
}
function circle(mousex,mousey){

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mousex,mousey,40,0,2*Math.PI);
ctx.stroke();
}
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
}
