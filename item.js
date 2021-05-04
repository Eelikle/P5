


let ProdID = localStorage.getItem('ProdID')
           fetch('http://localhost:3000/api/teddies/'+ProdID).then(result => result.json()).then(data=> {
            // make you render for the product 
            document.getElementById('products').innerHTML="";
            document.getElementById('products').innerHTML=`
            <div class="image">
            <img src="${data.imageUrl}" alt="product1">
            <h3>${data.name}</h3>
            <h3>${data.price}</h3>
            <p>${data.description}</p>
            <p>${data.colors}</p>
            <a class="back-to-shop" href="index.html">Back to shop</a>
            <a class="add-cart cart1" href="#" >Add Cart</a>
            </div>
        </div>
         
        `

 
       document.getElementsByClassName('add-cart')[0].addEventListener('click',()=> AddToCart(data))
        
})



function AddToCart(product){

    if(localStorage.getItem('productsCart') != null){

        let cartPorduts = JSON.parse(localStorage.getItem('productsCart')) // get the previuos product and teransfrom it to array using json.parse 
        cartPorduts.push(product) // pusshing the produt to that array 
        localStorage.setItem('productsCart', JSON.stringify(cartPorduts)) // storing the values back to local storage with both valuth 

    }else{
        let productsArray = []
        productsArray.push(product)
    
        localStorage.setItem('productsCart', JSON.stringify(productsArray))
    }
   
    window.location.href = "./cart.html"
}



/*

let selection = document.querySelector('select');
let result = document.querySelector('h2');

selection.addEventListener('change', () => {
    result.innerText = selection.options[selection.selectedIndex].text;
})
*/

/*
const colorDropdown = document.getElementById('teddy-color');
const colorResult = document.getElementById()
*/
/*colorDropdown.addEventListener('change' ($event) => {

})

*/