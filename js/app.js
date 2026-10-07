{
    var name = "John Doe";
    let age = 30;

    console.log("Name: " + name);
    console.log("Age: " + age);
}

console.log("Outside block - Name: " + name); // Accessible
console.log("Outside block - Age: " + age); // ReferenceError: age is not defined