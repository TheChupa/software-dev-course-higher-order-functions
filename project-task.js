/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// ============================================
// 🔧 Tasks
// ============================================

/*
🔹 Task 1: Filter Products by Availability

Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example: filter by availability or price threshold.
*/
//Step-by-Step:
//1. Define the `filterProducts` function with appropriate parameters.
//2. Use the `filter()` method to apply the callback to the array.
//3. Return the filtered result.  


function filterProducts(products, callback) {
  let filtered = products.filter(callback);


    return filtered;
}

// is in stock inStock = true
let isInStock = filterProducts(products, product => product.inStock); 

// price is below 500
let isBelow500 = filterProducts(products, product => product.price < 500);


//console.log(isInStock);
//console.log(isBelow500);


//can set parameter for price searches
function isBelow(num) {
  return products.filter(item => item.price < num);
}

function isAbove(num){
  return products.filter(item => item.price > num);
}

//console.log(isBelow(800));
//console.log(isAbove(300));

/*
🔹 Task 2: Transform Product Names

Use `map()` to create a new array of product names in UPPERCASE.

Step-by-Step:
1. Use `map()` on the products array.
2. Extract and transform the `name` property to uppercase.
3. Store the result in a new variable.
*/

let uppercase = products.map(product => product.name.toUpperCase());

//console.log(uppercase);


/*
🔹 Task 3: Generate Discounted Prices

Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage
- Returns a function that takes a product and returns a discounted price

Step-by-Step:
1. Define a function `applyDiscount` that takes `discountPercent`.
2. Return a new function that takes a product object.
3. Use this returned function inside a `map()` call to apply discounts to all products.
*/
function applyDiscount(discountPercent) {
  return function (product) {
    let discountedPrice = product.price -(product.price * (discountPercent/100));
    return {
      ... product,  
      price: discountedPrice //for every price in the array, put the discount price
    };
  };
}

let tenPercent = applyDiscount(10);
let discountedProducts = products.map(tenPercent);

//console.log(discountedProducts);

/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.

Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/


let totalInventoryValue = isInStock.reduce((total, product) => {
 return total + product.price;
}, 0);

//console.log(totalInventoryValue);


// ============================================
// 🧪 Console Test Your Work
// ============================================

console.log("Filtered products:", isInStock);
console.log("Filtered products:", isBelow500)
console.log("Uppercased names:", uppercase);
console.log("Discounted products:", discountedProducts);
console.log("Total value in stock:", totalInventoryValue);
