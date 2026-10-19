const message = document.getElementById("message");
const count = document.getElementById("count");

message.addEventListener("input", function(){
    count.innerText = message.value.length;
})