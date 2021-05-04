           fetch('http://localhost:3000/api/teddies/').then(result => result.json()).then(data=> {
            document.getElementById('products').innerHTML = "";
           data.forEach(element => {
               document.getElementById('products').insertAdjacentHTML("beforeend",`
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

           function savProduct(prodid){
            console.log(prodid)
            localStorage.setItem('ProdID',prodid )
            window.location.href = "item.html"  //replace # with the new page name like product.html
       }



       // copy this code ito the new created missing page  ( single product page )0 // this api is called inside the single page that you need to create 

       // first  using query param   item.html?id= "5be9c8541c9d440000665243"
       // second using localstorage 
        //let ProdID = localStorage.getItem('ProdID')
       //fetch('http://localhost:3000/api/teddies/'+ProdID).then(result => result.json()).then(data=> {
        // make you render for the product 
      
           

       //})

    