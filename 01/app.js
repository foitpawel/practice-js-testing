function getProductList() {
    return [
        {name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21},
        {name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27}
    ]
}

function getTotalPrice(productList) {
    return productList.reduce( (acc, product) => {
    return Math.round((acc + (product.price * product.count * (1 - product.discount))) * 100) / 100;
}, 0);
}

const totalPrice = getTotalPrice( getProductList() );
console.log(totalPrice); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)