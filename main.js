//function for api request
makeRequest = () => {
    return new Promise((resolve, reject) => {
        let apiRequest = new XMLHttpRequest();
        apiRequest.open('GET', 'http://localhost:3000/api/cameras/');
        apiRequest.send();
        apiRequest.onreadystatechange = () => {
            if (apiRequest.readyState === 4) {
                if (apiRequest.status === 200) {
                    resolve(JSON.parse(apiRequest.response));
                }
                else {
                    //if unsuccessful reject with error message.
                    reject('Server is down!');
                }
            }
        }
    })
};

let carts = document.queriSelectorAll('.add-cart');

//simple loop runs 0 to carts length 0 till 3, 
//using eventListener click and then function clicking button will add item to cart
for (let i=0; i <carts.lenght; i++) {
    carts[i].addEventListener('click', () => {
       //console.log("added to cart");
       cartNumbers();
    })
}

//how many items I am adding to the cart, curt numbers
function cartNumbers() {
    localStorage.setItem('cartNumbers', 1)
}