var animalIMG = document.querySelector("#fav-animal");

console.log("animal picture is working");

function pickcat(element) {
    console.log(element);
    element.style.backgroundColor ="goldenrod";
    // element.remove(); will remove the element 
    animalIMG.src = "assets/pexels-evg-kowalievska-1170986.jpg";
}
function pickdog(element) {
    element.classList.add("button"); // note that classs list is not working like it should, the button should change to whats in css
    animalIMG.src = "assets/pexels-helena-lopes-2253275.jpg";
}
// you can see that you can change the src of the picture based on when someoen clicks, 
// we changed the src atribute 