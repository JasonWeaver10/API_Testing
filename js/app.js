
console.log('js is loaded');

let productPrice = '';
let productName = '';
let productButton = '';
let productClass = '';

const url = 'https://httpbin.org/post'
const data = { productName: this.productName, productPrice: this.productPrice };

function sendAPIRequest(){
    fetch(url, {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify(this.data), 
    })
    .then(response => response.json()) 
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });

}

function setupPage(){
    this.productPrice = document.getElementById('product-price').innerText;
    this.productName = document.getElementById('product-name').innerText;
    this.productButton = document.querySelector('#product-button');
    this.productClass = document.querySelector('.product-card');

    this.productButton.addEventListener('click', (event) => {
        console.log('Button was clicked!');
        this.sendAPIRequest();
    });
}



setupPage();


