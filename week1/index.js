"use strict";

// Task 1 - Using Node and NPM
// This part is only to check Node.js setup
console.log("Hello World, Node.js!");

// Task 2 - Working with Arrays

// 1. Create and index an array
let numbers = [15, 12, 99, 36, 19];
console.log("Step 1:", numbers);

// 2. Add the number 20 to the end of the array
numbers.push(20);
console.log("Step 2:", numbers);

// 3. Add the number 105 to the beginning of the array
numbers.unshift(105);
console.log("Step 3:", numbers);

// 4. Add a new item (number 17) as the 3rd item in the array
numbers.splice(2, 0, 17);
console.log("Step 4:", numbers);

// 5. Remove the last number from the array
numbers.pop();
console.log("Step 5:", numbers);

// 6. Remove the 2nd number from the array
numbers.splice(1, 1);
console.log("Step 6:", numbers);

// 7. Change the value of the 5th element in the array to 100
numbers[4] = 100;
console.log("Step 7:", numbers);

// 8. Multiply each number in the array by 2 using the map method
let multipliedNumbers = numbers.map(num => num * 2);
console.log("Step 8:", multipliedNumbers);

// 9. Add all of the numbers in the array together using the reduce method
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Step 9:", sum);

// Task 3 - Working with JSON

// 1. Create a JavaScript object
let data = {
    people: [
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2" },
        { username: "user3", password: "pass3" }
    ]
};
console.log("Task 3, Step 1:", data);

// 2. Convert that object to a JSON string
let jsonString = JSON.stringify(data);
console.log("Task 3, Step 2:", jsonString);

// 3. Convert the JSON string back into a JavaScript object
let jsonObject = JSON.parse(jsonString);
console.log("Task 3, Step 3:", jsonObject);

// Task 4 - NPM packages

const prompt = require('prompt');

prompt.start();

prompt.get(['num1', 'num2'], function (err, result) {
    if (err) { return onErr(err); }
    
    let num1 = parseFloat(result.num1);
    let num2 = parseFloat(result.num2);

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Both inputs must be numbers.");
    } else {
        // Calculate and display the sum
        console.log('Sum of numbers is ' + (num1 + num2));
    }
});

function onErr(err) {
    console.log(err);
    return 1;
}

// Display the version of the prompt package
const packageJson = require('./package.json');
console.log("Prompt package version: 444" + packageJson.dependencies.prompt);

// Task 5 - Arrow Functions

// Declarative function
function convUpperCase(value) {
    return value.toUpperCase();
}
console.log("Task 5, Step 1:", convUpperCase("hello"));

// Function expression
const convUpperCaseExpr = function(value) {
    return value.toUpperCase();
};
console.log("Task 5, Step 2:", convUpperCaseExpr("world"));

// Arrow function
const convUpperCaseArrow = value => value.toUpperCase();
console.log("Task 5, Step 3:", convUpperCaseArrow("javascript"));
