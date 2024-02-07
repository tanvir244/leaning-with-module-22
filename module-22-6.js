
// 22-6 (Advanced) Multi-Layer Discount Price Calculation

/**
 * upto 100 : ----> 100 Tk
 * more than 101-200 : ----> 90 Tk
 * more than 200 : ----> 70 Tk
 * Note: this function below made by my own wishs requrement where I count all quantity 
 */
function discountPrice(price){
    let totalPrice = 0; 
    if(price <= 100){
        totalPrice = 100 * price;
    }
    else if(price > 100 && price <= 200){
        const forFirst100 = 100 * 100;
        const priceAfter100 = price - 100;
        totalPrice = forFirst100 + (priceAfter100 * 90);
    }
    else{
        const forFirst100 = 100 * 100;
        const forSecond100 = 100 * 90;
        const priceAfter200 = price - 200;
        totalPrice = forFirst100 + forSecond100 + (priceAfter200 * 70);
    }
    return totalPrice;

}
const totalWithDiscount = discountPrice(101);
console.log(totalWithDiscount); 