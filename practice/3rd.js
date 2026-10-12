let count = 10;

function CountDown(){
    document.getElementById("timer").innerText = count;
    count--;
}

let timer = setInterval(()=>{
    if(count<0){
        clearInterval(timer);
        alert("Countdown completed!");
        return;
    }
    CountDown();
}, 1000)