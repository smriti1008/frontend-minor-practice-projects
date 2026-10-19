const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", function(){
    dropdownMenu.classList.toggle("hidden");

    if(dropdownMenu.classList.contains("hidden")){
        dropdownBtn.innerText ="Open Menu ▼";
    }
    else{
        dropdownBtn.innerText = "Close Menu ▲";
    }
})