/**
 *  1- on item .js  when we click in add to cart , create an array on local storage and puch it to this array.
 * 2- select the page part ( class products ) and render the products array from local storage 
 * 3- local storage use strings only  use  json.stringfy()  cover arrays to string 
 * 4- covert string array to normal arrat  json.parse() convert string array to array 
 * 5- loop over the array to render the data 
 */


// get the products back from the local strorage 

let cart = JSON.parse(localStorage.getItem('productsCart'))

// seleect my render localtion 

let cartDiv = document.getElementById('products')

// loop over my products and show them to the user 
cart.forEach((element,index) => {
    cartDiv.insertAdjacentHTML("beforeend",`
    <tr >

 <td>${element.name}</td>
 <td id="price-${index}">${element.price}</td>
 <td><input type="number" id="${element.name}-${index}"  onchange="calulateTotal('${index}','${element.name}-${index}')" /></td>
 <td id="total-${index}"> </td>


     </tr>
    `)
})

function  calulateTotal(index,inputName){
    // total = price * quantiy
    let input = document.getElementById(inputName).value
    let totaldiv = document.getElementById('total-'+index)
    let price = document.getElementById('price-'+index).innerText

    totaldiv.innerText = input * price

}



document.getElementsByClassName('submit-btn')[0].addEventListener('click', (event)=>{
    event.preventDefault()
    let contact = {
        firstName : document.getElementById("name").value  ,
        lastName:document.getElementById("surename").value , 
        city : document.getElementById("city").value , 
        email: document.getElementById("email").value ,
        address  : document.getElementById("address").value 
    }
    //console.log(contact)
  
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
     if( document.submitForm.adress.value == "" ) {
        alert( "Please provide your address!" );
        document.submitForm.address.focus() ;
        return false;
     }
    return( true );
      }



      

// validate the form for not being empty
// send the object to order api 