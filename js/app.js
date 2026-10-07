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

// const productList = [
//     { name: "Laptop", inStock:true, price: 1000 },
//     { name: "Phone", inStock:false, price: 500 },
//     { name: "Tablet", inStock:true, price: 800 },
//     { name: "Monitor", inStock:false, price: 300 }
// ];

// console.log(productList);

// let inStockProducts = productList.filter(
//     function(product) {
//         return product.inStock === true;
//     }
// );

// console.log(inStockProducts);


// let inStockProducts = productList.filter(product => product.inStock == true);
// console.log(inStockProducts);

// sorting array of objects

// const letterList = [ "D", "A", "C", "B", "E", "F", "G", "H", "I", "J"];
// console.log(letterList);

// let sortedList = letterList.sort();
// console.log(sortedList);
// console.log(letterList);


// const salaryList = [ 5000, 3000, 7000, 2000, 6000, 4000 ];
// console.log(salaryList);  

// let doubleSalaryList = salaryList.map(salary => salary * 2);
// console.log(doubleSalaryList);

// find - methods

// const studentList = [
//     { name: "John", age: 20 },
//     { name: "Jane", age: 22 },
//     { name: "Alice", age: 19 },
//     { name: "Bob", age: 21 }
// ];
// console.log(studentList);


// let student = studentList.find(student => student.name === "Alice");
// console.log(student);

// JSON - javascript object notation

fetch("https://jsonplaceholder.typicode.com/posts/").then(res => res.json()).then(data => {
    console.log(data);

   let tblItems = document.getElementById("tblItems");

   let tblBody = "";

   data.forEach(element => {
    tblBody += `  <tr> 
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.body}</td>
        <td>${element.userId}</td>
        </tr>`;
   });
    tblItems.innerHTML = tblBody;
});