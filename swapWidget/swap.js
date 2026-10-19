const inputA = document.getElementById("InputA");
const inputB = document.getElementById("InputB");
const swapBtn = document.getElementById("swapBtn");

swapBtn.addEventListener("click", function(){
    let temp = inputA.value;
    inputA.value = inputB.value;
    inputB.value = temp;
})

// // Create heading
// const heading = document.createElement("h1");
// heading.innerText = "Swap Two Inputs";
// document.body.appendChild(heading);


// // Create first input
// const inputA = document.createElement("input");
// inputA.placeholder = "Enter first value";
// document.body.appendChild(inputA);


// // Create button
// const swapBtn = document.createElement("button");
// swapBtn.innerText = "Swap";
// document.body.appendChild(swapBtn);


// // Create second input
// const inputB = document.createElement("input");
// inputB.placeholder = "Enter second value";
// document.body.appendChild(inputB);


// // Add some CSS using JavaScript
// document.body.style.textAlign = "center";
// document.body.style.marginTop = "100px";

// inputA.style.padding = "10px";
// inputB.style.padding = "10px";

// swapBtn.style.padding = "10px 20px";
// swapBtn.style.margin = "20px";


// // Swap logic
// swapBtn.addEventListener("click", function () {

//     let temp = inputA.value;

//     inputA.value = inputB.value;

//     inputB.value = temp;

// });