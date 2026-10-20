const chatWindow = document.getElementById("chatWindow");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, sender){
    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.innerText = text;
    chatWindow.appendChild(message);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function sendMessage(){
    const text = messageInput.value.trim();
    if(text==="")
    {
        return;
    }

    addMessage(text, "user");
    messageInput.value="";
    setTimeout(function() {
        addMessage("Echo: "+text, "bot");
    }, 500);
}

sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        sendMessage();
    }
})