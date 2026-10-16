const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product li")

function filterProducts(){
    const searchValue = searchInput.value.toLowerCase();

    products.forEach(function(product){
        const productName = product.getAttribute("data-name").toLowerCase();

        if(productName.includes(searchValue)){
            product.classList.remove("hide");
        }
        else{
            product.classList.add("hide");
        }
    })
}
searchInput.addEventListener("input", filterProducts);
filterProducts();