import { question } from 'readline-sync';

let number = question("Enter a number: ");

if (number > 0) {
    console.log("The number is positive");
} 
    else if (number < 0) {
    console.log("The number is negative");
} 
    else {
    console.log("The number is 0");
}