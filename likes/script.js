
var like = [5, 6, 3];
var click = [
    document.querySelector("#like1"),
    document.querySelector("#like2"),
    document.querySelector("#like3")
];
function mylike(id) {
    like[id]++;
    click[id].innerHTML = like[id] + "like(s)";
}