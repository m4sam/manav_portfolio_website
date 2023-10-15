// todo: Formula of BMI (weightValue/((heightValue*heightValue)/10000))

// Selector
let form=document.getElementsByTagName("form")[0];

// Add Event
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let heightValue=document.getElementById("height").value;
    let weightValue=document.getElementById("weight").value;
    let result=document.getElementsByClassName("result")[0];
    // console.log(heightValue+" "+weightValue)
let bmi=(weightValue/((heightValue*heightValue)/10000)).toFixed(2)
result.innerHTML=bmi
})