function updateProductNumber(product, price, isIncreasing){
    let productQ = document.getElementById(product + "-quantity");
    let productNumber = productQ.value;

    if (isIncreasing){
        productNumber = parseInt(productNumber) + 1;
    }
    else if ( productNumber > 0 ){
        productNumber = parseInt(productNumber) - 1;
    }

    productQ.value = productNumber;
    const productTotalPrice = document.getElementById(product + "-price");
    productTotalPrice.innerText = productNumber * price ;
}
document.getElementById("phone-plus").addEventListener("click", function(){
    updateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function(){
    updateProductNumber("phone", 1219, false);
});
document.getElementById("case-plus").addEventListener("click", function(){
   updateProductNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function(){
    updateProductNumber("case", 59, false);
});

