let count = 0;
const incbtn = document.getElementById("incbtn");
const decbtn = document.getElementById("decbtn");
incbtn.addEventListener("click", function(){
    if(count<10){
        count++;
    }
    document.getElementById("count").innerText = count;
});
decbtn.addEventListener("click", function(){
    if(count>0){
        count --;
    }
    document.getElementById("count").innerText = count;
});



// let count = 0;

// const container = document.createElement("div");

// const heading = document.createElement("h1");
// heading.innerText = "Counter";

// const countDisplay = document.createElement("p");
// countDisplay.innerText = count;

// const incBtn = document.createElement("button");
// incBtn.innerText = "INCREMENT (+)";

// const decBtn = document.createElement("button");
// decBtn.innerText = "DECREMENT (-)";

// container.appendChild(heading);
// container.appendChild(countDisplay);
// container.appendChild(incBtn);
// container.appendChild(decBtn);

// document.body.appendChild(container);

// incBtn.addEventListener("click", function () {
//     if (count < 10) {
//         count++;
//         countDisplay.innerText = count;
//     }
// });

// decBtn.addEventListener("click", function () {
//     if (count > 0) {
//         count--;
//         countDisplay.innerText = count;
//     }
// });