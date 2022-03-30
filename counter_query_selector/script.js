var count = 1;
var countElement = document.querySelector("#count"); // query selector 
// this is how we 
console.log(countElement);

function add1(){
    count++;
    countElement.innerText = "The count is " +  count;
    console.log(count);
}
function subtract1(){
    count--;
    countElement.innerText = "The count is " +  count; // allows me to change the name of the title with the newest number 
    console.log(count);
}