const cart = {};
const Items = [
    {name: "Chips", price: 20, id: "addToCartChips"},
    {name: "Soda", price: 40, id: "addToCartSoda"},
    {name: "Cookies", price: 30, id: "addToCartCookies"}

];

const cartBody = document.getElementById("cartBody");
Items.forEach(function(item){
    const button = document.getElementById(item.id);
    button.addEventListener("click", function(){
        if(cart[item.name]){
            cart[item.name].quantity++;
        }
        else{
            cart[item.name] = {
                price: item.price,
                quantity: 1
            }
        }
        displayCart();
    })
})

function displayCart(){
    cartBody.innerHTML = "";
    for(const name in cart){
        const row = document.createElement("tr");
        row.innerHTML = `
        <td> ${name} </td>
        <td> ${cart[name].price}</td>
        <td> ${cart[name].quantity}</td>
        `;
        cartBody.appendChild(row);
    }
}