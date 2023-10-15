let celcius=document.getElementById("celcius");
let farenhite=document.getElementById("farenhite");

celcius.addEventListener("input",()=>{
    let c=celcius.value;
    let far=((c * 9/5) + 32) ;
    if(!Number.isInteger(far)){
        far=far.toFixed(2)
    }
    farenhite.value=far
});

farenhite.addEventListener("input",()=>{
let f=farenhite.value;
let cel=((f - 32) * 5/9);
if(!Number.isInteger(cel)){
    cel=cel.toFixed(2)
}
celcius.value=cel
})
