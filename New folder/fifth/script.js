let body=document.body;
let btn=document.getElementById("stop");
let start=document.getElementById("start");

let backgroundChanger=setInterval(()=>{
let red=Math.floor(Math.random()*126);
let green=Math.floor(Math.random()*126);
let blue=Math.floor(Math.random()*126);
let rgb=`rgb(${red},${green},${blue})`;
body.style.background=rgb
},1000);

btn.addEventListener("click",()=>{
    clearInterval(backgroundChanger)
    btn.innerText=body.style.background;
})
start.addEventListener("click",()=>{
    location.reload();
})