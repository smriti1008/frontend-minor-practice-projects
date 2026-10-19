const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        toggleBtn.innerText = "Light mode";
    }else{
        toggleBtn.innerText = "Dark mode";
    }
})
