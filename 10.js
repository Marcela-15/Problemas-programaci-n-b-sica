import { question } from 'readline-sync';

let number = parseInt(question("Enter a number:"));

if ((number % 2) === 0) {
    console.log("The number is even");
} 
else {
    console.log("The number is odd");
}