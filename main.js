
/*
let addToCartButton = document.querySelectorAll('.add-cart');

//array has an object inside
let products = [
    {
        name: 'Colorful teddy bear',
        tag: 'Colorteddy',
        price: 12,
        inCart: 0
    },
    {
        name: 'Yellow teddy bear',
        tag: 'yellowteddy',
        price: 15,
        inCart: 0
    },
    {
        name: 'Blue teddy bear',
        tag: 'Blueteddy',
        price: 17,
        inCart: 0
    }
 ];


//simple loop runs 0 to carts length 0 till 3, 
//using eventListener click and then function clicking button will add item to cart
for (let i=0; i <addToCartButton.length; i++) {
    addToCartButton[i].addEventListener('click', () => {
       cartNumbers(products[i]);
       totalCost(products[i])
    })
}

function onLoadCartNumbers() { // this function will not run unless it is called, as this func. is not attatced to  
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

//how many items I am adding to the cart, cart numbers, converting string into a number
function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
//if I have product in storage
    if(productNumbers) {
      localStorage.setItem('cartNumbers', productNumbers + 1); 
      document.querySelector('.cart span').textContent = productNumbers + 1; 
    } else { //if there is none then cartnumbers to be 1
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1; //web page cart gets updated
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null) {

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

 function totalCost(product) {
     //console.log("the product proce is", product.price);
     let cartCost = localStorage.getItem('totalCost');
     
        if(cartCost != null) {
         cartCost = parseInt(cartCost);
         localStorage.setItem("totalCost", cartCost + product.price);
     } else {
         localStorage.setItem("totalCost", product.price);
     }
 }

 function displayCart() {
     let cartItems = localStorage.getItem("productsInCart");
     cartItems = JSON.parse(cartItems);
     let productContainer = document.querySelector
     (".products");
     if( cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./images/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">£${item.price},00</div>
            <div class="quantity">
                <ion-icon class="decrease"
                name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase"
                name="arrow-dropright-circle"></ion-icon>
            </div> 
            <div class="total"> 
                £${item.inCart * item.price},00
            </div>
            `
        });
     }
 }
onLoadCartNumbers();
displayCart();


const name = document.getElementById('name')
const surename = document.getElementById('surename')
const address = document.getElementById('address')
const city = document.getElementById('city')
const email = document.getElementById('email')
*/
