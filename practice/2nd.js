const quotes = [
    'God is great',
    'Work is worship',
    'you will make it',
    'You can and you will'
]

function GenerateQuote(){
    const randomIndex = Math.floor(Math.random()*quotes.length);
    document.getElementById("quote").innerText = `${quotes[randomIndex]}`
}