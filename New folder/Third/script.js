// Selector

let localTime=document.getElementById("time");

setInterval(()=>{
let time=new Date();
let newTime=time.toLocaleTimeString();
localTime.innerHTML=newTime
},1000)