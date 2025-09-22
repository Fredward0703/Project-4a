// step 2
const products = [
    {name:"Soccer Ball", Category:"Sports",price:19.99,inventory:20},
    {name:"Athletic Shorts", Category:"Clothing",price:9.99,inventory:35},
    {name:"Laptops", Category:"Electronics",price:499.99,inventory:8},
    {name:"Shampoo", Category:"Household",price:4.99,inventory:42},
    {name:"Chair", Category:"Household",price:49.99,inventory:12},
];
console.log("Products I am selling:")
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
    
};

//attmepting step 4, again, wish me luck
let customers = [
    {customerNumber: "1",customerType:"senior", item:"Laptop", qty:1},
    {customerNumber: "2",customerType:"student", item:"Soccer ball", qty:4},
    {customerNumber: "3",customerType:"cool person", item:"Shampoo", qty:2},
];
   

if (customers.customerType = "senior") {
    discount = .2
    console.log(`For putting up with this planet for 60+ years, you get a ${(discount)*100}% discount!`)
} else if (customers.customerType = "student") {
    discount = .1
    console.log(`Congrats on being a student, you get an extra ${(discount)*100}% off!`)
} else if (customers.customerType = "cool person") {
    discount = .05
    console.log(`Thanks for being a cool person, you get a ${(discount)*100}% off`)
} else {
    console.log(`Sorry, no discounts applied at this moment`)
}


//think I did this statement right although I'm not sure how to test it besides adding extra ='s in each statement
//Starting step 5
