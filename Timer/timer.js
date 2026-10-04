let count = 10;

function startCountdown(){

    document.getElementById("timer").innerText = count;
    count--;

let timer = setInterval(()=>{

    if(count<0){
        clearInterval(timer);
        alert("Countdown Completed!");
        return;
    }

    document.getElementById("timer").innerText = count;
    count--;

},1000);

}


