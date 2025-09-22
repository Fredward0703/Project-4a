// step 2
const products = [
    {name:"Soccer Ball", Category:"Sports",price:19.99,inventory:20},
    {name:"Athletic Shorts", Category:"Clothing",price:9.99,inventory:35},
    {name:"Laptops", Category:"Electronics",price:499.99,inventory:8},
    {name:"Shampoo", Category:"Household",price:4.99,inventory:42},
    {name:"Chair", Category:"Household",price:49.99,inventory:12},
];
console.log("===== Products I am selling =====")
console.log(products)

//attempting step 3, wish me luck
for (let product of products) {
    let discount;

    switch (product.Category) {
        case "Electronics":
            discount = .2
            console.log(`Laptops are now on sale for $${Math.round(product.price * (1-discount))}!`)
            break;
        case "Sports":
        case "Clothing":
            discount = .15
            console.log(`Sports and Clothing are now $${Math.round(product.price * (1-discount))}!`)
            break;
        case "Household":
            discount = .1
            console.log(`Household products are now $${Math.round(product.price * (1-discount))}!`)
            break;
        
    
        default:
            discount = 0;
            break;
    }
    
}