/*const product = {
    name: 'basketball',
    price: 2095,
    ['delivery-time']: '3 days'
};
product.basketball += 500;
console.log(product);*/
/*
function comparePrice(product1, product2) {
    
    
    
    if (product1.price < product2.price) {
        return product1;
    } else {
        return product2.name;
    }

}
const product1 = {
    name: 'iphone 6s',
    price: 100
}

const product2 = {
    name: 'iphone 14 ProMax',
    price: 2000
}
*/

//NEW FUNCTION

function isSameProduct(product1, product2) {
    
   if (product1.name === product2.name && 
        product1.price === product2.price) {
   
            console.log(true);
        } else {
            console.log(false);
        }
};

let originalString = 'Good Morning';
let lowercase = originalString.toLowerCase();
console.log(lowercase);

let numberOfTimes = 2;
let repeatString = lowercase.repeat(numberOfTimes);
console.log(repeatString);

//Next step



