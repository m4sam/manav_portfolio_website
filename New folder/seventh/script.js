let word=document.getElementsByClassName("word")[0];
let character=document.getElementsByClassName("character")[0];
let textarea=document.getElementsByTagName("textarea")[0];

textarea.addEventListener("input",()=>{
    let textbox=textarea.value;
    // todo for charcter
    let char=textbox.length;
    character.innerHTML=char

    // todo for word
    let words=textbox.split(" ");
    let updateWords=words.filter((e)=>{
return e !="";
    })
    word.innerHTML=updateWords.length
})