const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
        tabs.forEach(function(t){
            t.classList.remove("active");
        })

        contents.forEach(function(content){
            content.classList.remove("active");
        })

        tab.classList.add("active")

        const selectedContent = document.getElementById(tab.dataset.tab)
        selectedContent.classList.add("active");
    })
})