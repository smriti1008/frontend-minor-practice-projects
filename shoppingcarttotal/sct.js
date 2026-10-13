const items = document.querySelectorAll(".item");

items.forEach(item=>{
    const increaseBtn = item.querySelector(".increase");
    const decreaseBtn = item.querySelector(".decrease");

    increaseBtn.addEventListener("click", ()=>{
        updateQuantity(item, 1);
    })
    decreaseBtn.addEventListener("click", ()=>{
        updateQuantity(item, -1);
    })
})

function updateQuantity(item, change){
    const quantityElement = item.querySelector(".quantity");
    const subtotalElement = item.querySelector(".Subtotal");

    const price = Number(item.dataset.price);
    let quantity = Number(quantityElement.textContent);

    quantity = Math.max(0, quantity+change);
    quantityElement.textContent = quantity;

    const Subtotal = price*quantity;
    subtotalElement.textContent = Subtotal.toFixed(2);

    calculateTotal();
}

function calculateTotal(){
    let total = 0;
    items.forEach(item=>{
        const Subtotal = Number(
            item.querySelector(".Subtotal").textContent
        );
        total+=Subtotal;
    })

    const Discount = total>100 ? total * 0.10:0;

    const FinalTotal = total-Discount;

    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("Discount").textContent = Discount.toFixed(2);
    document.getElementById("FinalTotal").textContent = FinalTotal.toFixed(2);
}