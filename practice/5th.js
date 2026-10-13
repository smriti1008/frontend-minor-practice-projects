const canvas = document.getElementById("canvas");
const triangle = document.getElementById("trianglebtn");
const square = document.getElementById("squarebtn");
const circle = document.getElementById("circlebtn");

trianglebtn.addEventListener("click", function(){
    canvas.innerHTML=" ";
    const triangle = document.createElement("div");
    triangle.classList.add("triangle");
    canvas.appendChild(triangle);
})

squarebtn.addEventListener("click", function(){
    canvas.innerHTML = " ";
    const square = document.createElement("div");
    square.classList.add("square");
    canvas.appendChild(square);
})

circlebtn.addEventListener("click", function(){
    canvas.innerHTML= " ";
    const circle = document.createElement("div");
    circle.classList.add("circle")
    canvas.appendChild(circle);
})