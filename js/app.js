// {
//     var name = "John Doe";
//     let age = 30;

//     console.log("Name: " + name);
//     console.log("Age: " + age);
// }

// console.log("Outside block - Name: " + name); // Accessible
// console.log("Outside block - Age: " + age); // ReferenceError: age is not defined

//const

// let age = 30;
// console.log(age);

// age = 25;
// console.log(age);

// const number = 10;
// console.log(number);

// number = 20; // TypeError: Assignment to constant variable. 
// console.log(number);

// arrays - const

// let customerList = ["John", "Jane", "Alice"];
// console.log(customerList);

// customerList  = "Bob";
// console.log(customerList);

// const customerList = ["John", "Jane", "Alice"];
// console.log(customerList);

// customerList.push("Bob");
// console.log(customerList);

//------- array methods ---------

// const number = [];
// number.push(1,2,3,4,5);

// console.log(number);

// number.reverse();
// console.log(number);

// ------ filter method ---------

const productList = [
    { name: "Laptop", inStock:true, price: 1000 },
    { name: "Phone", inStock:false, price: 500 },
    { name: "Tablet", inStock:true, price: 800 },
    { name: "Monitor", inStock:false, price: 300 }
];

console.log(productList);

let inStockProducts = productList.filter(
    function(product) {
        return product.inStock === true;
    }
);

console.log(inStockProducts);