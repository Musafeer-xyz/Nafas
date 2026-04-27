let count = 0;
function updateCart() {
    count++;
    document.getElementById('cart-count').innerText = count;
    alert("Item added to selection!");
}