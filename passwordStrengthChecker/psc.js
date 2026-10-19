const password = document.getElementById("password");
const strength = document.getElementById("strength");

password.addEventListener("input", function(){
    const value = password.value;
    strength.className = "";
    if(value.length ===0)
    {
        strength.innerText = "none";
    }
    else if(value.length<6)
    {
        strength.innerText = "weak";
        strength.classList.add("weak");
    }
    else if(value.length<10)
    {
        strength.innerText = "medium";
        strength.classList.add("medium");
    }
    else{
        strength.innerText = "strong";
        strength.classList.add("strong");
    }
})