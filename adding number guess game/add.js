let left=document.getElementById("leftnumber");
let right=document.getElementById("rightnumber");
let inputvalue=document.getElementById("inputnumber");
let textvalue=document.getElementById("last");

function reset(){
    let leftvalue=Math.ceil(Math.random()*100);
    let rightvalue=Math.ceil(Math.random()*100);
    left.textContent=leftvalue;
    right.textContent=rightvalue;
}

function check(){
    let first=parseInt(left.textContent);
    let second=parseInt( right.textContent)
    let total=first+second;
    let enter=parseInt(inputvalue.value);
    if(total === enter){
        document.getElementById("last").textContent="good";
        document.getElementById("last").style.backgroundColor="blue";
       
    }
    else{
        document.getElementById("last").textContent="good";
        document.getElementById("last").style.backgroundColor="red";
    } 
}
