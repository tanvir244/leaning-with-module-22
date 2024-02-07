// 22-5 Calculate The Total Cost Of The Products In A Shopping Cart

const products = [
    {name: 'Sunglass', price: 300, quantity: 2},
    {name: 'Watch', price: 100, quantity: 3},
    {name: 'Shirt', price: 700, quantity: 5},
    {name: 'Pant', price: 1200, quantity: 7},
]

function costTotal(products){
    let sum = 0;
    for(const iteration in products){
        const totalCalculate = products[iteration].price * products[iteration].quantity;
        sum = sum + totalCalculate;
    }
    return sum;
}
const totalPrice = costTotal(products);
console.log(totalPrice);