


let ProdID = localStorage.getItem('ProdID')
           fetch('http://localhost:3000/api/teddies/'+ProdID).then(result => result.json()).then(data=> {
            document.getElementById('products').innerHTML=""; 
            document.getElementById('products').innerHTML=`
            <div class="image">
            <img src="${data.imageUrl}" alt="product1">
            <h3>${data.name}</h3>
            <h3>$ ${data.price}</h3>
            <p>${data.description}</p>
            <div class="dropdown">
                    <label for="color">Choose a color:</label>
                    <select name="colors" id= "teddy-color">
                    <option disabled hidden selected>Select</option>
                    </select>
             </div>
            <a class="back-to-shop" href="index.html">Back to shop</a>
            <a class="add-cart cart1" href="#" >Add Cart</a>
            </div>
        `
        data.colors.forEach(element => {
            document.getElementById('teddy-color').insertAdjacentHTML("beforeend",` <option value="${element}">${element}</option>`)
        })
    
       document.getElementsByClassName('add-cart')[0].addEventListener('click',()=> AddToCart(data))
})



function AddToCart(product){
    if(localStorage.getItem('productsCart') != null){
        let cartPorduts = JSON.parse(localStorage.getItem('productsCart')) 
        cartPorduts.push(product) 
        localStorage.setItem('productsCart', JSON.stringify(cartPorduts)) 
    }else{
        let productsArray = []
        productsArray.push(product)
        localStorage.setItem('productsCart', JSON.stringify(productsArray))
    }
    window.location.href = "./cart.html"
}

