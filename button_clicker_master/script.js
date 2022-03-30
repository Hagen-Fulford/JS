function loginIn(element){
    console.log("logged IN is working")
    if(element.innerText == "Login"){
        console.log("logged OUT is working")
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}
function add(e){
    console.log("add definition is working")
    e.remove();
}
function like(element){
    console.log("alert worked")
    alert("You Liked Ninja");
}