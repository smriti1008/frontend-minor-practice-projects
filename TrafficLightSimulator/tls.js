const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

const redBtn = document.getElementById("redBtn");
const yellowBtn = document.getElementById("yellowBtn");
const greenBtn = document.getElementById("greenBtn");

function turnOfAll(){
        red.classList.remove("active");
        yellow.classList.remove("active");
        green.classList.remove("active");
}

redBtn.addEventListener("click", function(){
    turnOfAll();
    red.classList.add("active");
})

yellowBtn.addEventListener("click", function(){
    turnOfAll();
    yellow.classList.add("active");
})

greenBtn.addEventListener("click", function(){
    turnOfAll();
    green.classList.add("active");
})