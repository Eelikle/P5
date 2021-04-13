


  function savProduct(prodid){
    console.log(prodid)
    localStorage.setItem('ProdID',prodid )
    window.location.href = "item.html"  //replace # with the new page name like product.html
}





let ProdID = localStorage.getItem('ProdID')
           fetch('http://localhost:3000/api/teddies/'+ProdID).then(result => result.json()).then(data=> {
            // make you render for the product 
            document.getElementsByClassName('item-container').innerHTML = "";
            data.forEach(element => {
                document.getElementsByClassName('item-container').insertAdjacentHTML("beforeend",`
                <div class="image">
             <img src="${element.imageUrl}" alt="product1">
             <h3>${element.name}</h3>
             <h3>${element.price}</h3>
             <p>${element.description}</p>
             <a class="add-cart cart1" href="#" onclick ="savProduct('${element._id}')">Product Details</a>
                 </div>
                `)
               

           });
        
    })