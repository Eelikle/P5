

let cart = JSON.parse(localStorage.getItem('productsCart'))

let cartDiv = document.getElementById('products')

cart.forEach((element,index) => {
    cartDiv.insertAdjacentHTML("beforeend",`
    <tr >
        <td>${element.name}</td>
        <td id="price-${index}" data-price="${element.price}"> $ ${element.price}</td>
        <td><input type="number" id="${element.name}-${index}"  onchange="calulateTotal('${index}','${element.name}-${index}')" /></td>
        <td id="total-${index}"> </td>
     </tr>
    `)
})

function  calulateTotal(index,inputName){
    let input = document.getElementById(inputName).value
    let totaldiv = document.getElementById('total-'+index)
    let price = document.getElementById('price-'+index).dataset.price

if (input >= 1 ){
    let total = input* price 
    totaldiv.innerText = total + "$"
    cart[index].quantaty = input
    cart[index].total = cart[index].quantaty * cart[index].price
    
  localStorage.setItem('productsCart',JSON.stringify(cart) )
}
else{
    alert('this is not correct')
    totaldiv.innerText =  ""
}
}

document.getElementsByClassName('submit-btn')[0].addEventListener('click',async (event)=>{
    event.preventDefault()
    
    if (validate()){
        let contact = {
            firstName : document.getElementById("name").value  ,
            lastName:document.getElementById("surename").value , 
            city : document.getElementById("city").value , 
            email: document.getElementById("email").value ,
            address  : document.getElementById("address").value 
        }
        let productsId = cart.map(prod => prod._id)   
        let sendObj = {
                contact ,
                products : productsId
            }
            let response = await fetch('http://localhost:3000/api/teddies/order', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(sendObj)
              });
              
              let result = await response.json();
              console.log(result);

            localStorage.setItem('orderid',JSON.stringify(result))
            window.location.href = "confirmation.html" 
    }
});


function validate() {
    if( document.submitForm.name.value == "" ) {
       alert( "Please provide your name!" );
       document.submitForm.name.focus() ;
       return false;
    }
    if( document.submitForm.surename.value == "" ) {
       alert( "Please provide your surename!" );
       document.submitForm.surename.focus() ;
       return false;
    }
    if( document.submitForm.email.value == "" ) {
        alert( "Please provide your Email!" );
        document.submitForm.email.focus() ;
        return false;
     }
     if( document.submitForm.address.value == "" ) {
        alert( "Please provide your address!" );
        document.submitForm.address.focus() ;
        return false;
     }
     if( document.submitForm.city.value == "" ) {
        alert( "Please provide your city!" );
        document.submitForm.city.focus() ;
        return false;
     }
         return true ;
      }




    
