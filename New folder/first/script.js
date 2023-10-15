let greenColor=document.getElementsByClassName("green")[0];
let redColor=document.getElementsByClassName("red")[0];
let blueColor=document.getElementsByClassName("blue")[0];
let whiteColor=document.getElementsByClassName("white")[0];
let h1=document.getElementsByTagName("h1")[0];
let body=document.body;

redColor.addEventListener("click",(e)=>{
  body.style.backgroundColor="red"
})
blueColor.addEventListener("click",(e)=>{
  body.style.backgroundColor="blue"
})
greenColor.addEventListener("click",(e)=>{
  body.style.backgroundColor="green"
})
whiteColor.addEventListener("click",(e)=>{
  body.style.backgroundColor="white"
})
h1.addEventListener("mousemove",(e)=>{
  h1.style.color="pink"
})
h1.addEventListener("mouseleave",(e)=>{
  h1.style.color="black"
})