
console.log('js is loaded');

let productPrice = document.getElementById('product-price').innerText;
let productName = document.getElementById('product-name').innerText;
let productButton = document.querySelector('#product-button').addEventListener('click', (event) => {
        console.log('Button was clicked!');
        this.sendAPIRequest();
    });;

 window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'product-view',
            'product-name': productName, 
            'product-price': productPrice
        });

function sendAPIRequest(){

    const url = 'https://httpbin.org/post'
    const productViewEvent = window.dataLayer.find(item => item.event === 'product-view');

    const data = {
        productName: productViewEvent?.['product-name'],
        productPrice: productViewEvent?.['product-price']
    };

    console.log('Data:', data);
    fetch(url, {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify(data), 
    })
    .then(response => {
        console.log('Response:', response); 
    return response.json();
    })
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
