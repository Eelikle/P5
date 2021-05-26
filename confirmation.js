  
let order = JSON.parse(localStorage.getItem('orderid'))

document.getElementById('orderid').innerText = order.orderId
let cart = JSON.parse(localStorage.getItem('productsCart'))
if (cart == null ) window.location.href ="index.html"
let cartTotal = 0

cart.forEach(element => {
    cartTotal = +element.total +"$"
});

document.getElementById('ordertotal').innerText = cartTotal
localStorage.removeItem('productsCart')