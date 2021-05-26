           fetch('http://localhost:3000/api/teddies/').then(result => result.json()).then(data=> {
            document.getElementById('products').innerHTML = "";
           data.forEach(element => {
               document.getElementById('products').insertAdjacentHTML("beforeend",`
               <div class="image">
            <img src="${element.imageUrl}" alt="product1">
            <h3>${element.name}</h3>
            <h3>$${element.price}</h3>
            <p>${element.description}</p>
            <a class="add-cart cart1" href="#" onclick ="savProduct('${element._id}')">Product Details</a>
                </div>
               `)
           });
           })
           function savProduct(prodid){
            localStorage.setItem('ProdID',prodid )
            window.location.href = "item.html"  
       }

    