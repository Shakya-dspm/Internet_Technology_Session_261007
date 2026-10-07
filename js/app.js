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

const customerList = ["John", "Jane", "Alice"];
console.log(customerList);

customerList.push("Bob");
console.log(customerList);